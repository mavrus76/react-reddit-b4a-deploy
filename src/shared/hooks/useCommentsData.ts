import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../store/reducer';

interface ICommentData {
  commentId?: string;
  parentId?: string;
  author?: string;
  body?: string;
  createdAt?: number;
}

export function useCommentsData(postId?: string) {
  const [data, setData] = useState<Array<ICommentData>>([]);
  const token = useSelector<TRootState, string>((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'COMMENTS_REQUEST' });
    if (!token || token === 'undefined') return;
    axios
      .get(`https://oauth.reddit.com/comments/${postId}`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => {
        const commentsData = res.data?.[1].data.children.map(
          (item: { [key: string]: any }): ICommentData => ({
            commentId: item.data.id,
            parentId: item.data.parent_id,
            author: item.data.author,
            body: item.data.body,
            createdAt: item.data.created_utc,
          }),
        );
        setData(commentsData);
        dispatch({ type: 'COMMENTS_REQUEST_SUCCESS' });
      })
      .catch((error) => {
        console.log(String(error));
        dispatch({ type: 'COMMENTS_REQUEST_ERROR' });
      });
  }, [token, postId, dispatch]);

  return [data];
}
