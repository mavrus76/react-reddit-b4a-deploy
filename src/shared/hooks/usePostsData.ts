/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from '../store/reducer';

interface IPostData {
  postId: string;
  author: string;
  title: string;
  previewImg: string;
  createdAt: number;
  avatarSrc: string;
  rating: number;
}

interface IImages {
  source: {
    url: string;
  };
}

interface IItem {
  data: {
    id: string;
    title: string;
    author: string;
    preview: {
      images: IImages[];
    };
    sr_detail: {
      created_utc: number;
      icon_img: string;
    };
    ups: number;
  };
}

export function usePostsData() {
  const [data, setData] = useState<Array<IPostData>>([]);
  const [nextAfter, setNextAfter] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [count, setCount] = useState(0);
  const token = useSelector<TRootState, string>((state) => state.token.token);
  const dispatch = useDispatch();

  const bottomOfList = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setCount(0);
  };

  useEffect(() => {
    dispatch({ type: 'POSTS_REQUEST' });
    if (!token || token === 'undefined') return;

    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const res = await axios.get(
          'https://oauth.reddit.com/best.json?sr_detail=true',
          {
            headers: { Authorization: `bearer ${token}` },
            params: {
              limit: 10,
              after: nextAfter,
            },
          },
        );

        const postsData = res.data.data.children.map(
          (item: IItem): IPostData => ({
            postId: item.data.id,
            title: item.data.title,
            author: item.data.author,
            avatarSrc: item.data.sr_detail.icon_img
              ? item.data.sr_detail.icon_img
              : 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
            previewImg: item.data.preview
              ? item.data.preview.images?.[0].source.url.replace(
                  /(&amp;)/g,
                  '&',
                )
              : 'https://i.ibb.co/HtCW9GN/noimage.png',
            createdAt: item.data.sr_detail.created_utc,
            rating: item.data.ups,
          }),
        );
        setData((prevChildren) => prevChildren.concat(...postsData));

        const { after } = res.data.data;
        setNextAfter(after);

        if (count < 3) {
          const acc: number = count + 1;
          setCount(acc);
        }

        dispatch({ type: 'POSTS_REQUEST_SUCCESS' });
        setLoading(false);
      } catch (error) {
        setErrorLoading(String(error));
        dispatch({ type: 'POSTS_REQUEST_ERROR' });
        setLoading(false);
      }

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          load();
        }
      },
      {
        rootMargin: '10px',
      },
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [token, dispatch, nextAfter, count]);

  return { data, loading, errorLoading, bottomOfList, count, handleClick };
}
