import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import styles from './post.css';
import { Comments } from '../Comments';
import { useCommentsData } from '../hooks/useCommentsData';
import { IconClose } from '../icons/IconClose';
import { CommentFormContainer } from '../CommentFormContainer';
import { postsContext } from '../context/postsContext';

export function Post() {
  const [postId, setPostId] = useState('');
  const commentsData = useCommentsData(postId)[0];
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const { data } = useContext(postsContext);
  let title = '';
  data.forEach((post) => {
    if (postId === post.postId) {
      title = post.title;
    }
  });

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        history.push('/posts');
      }
    }

    document.addEventListener('click', handleClick);
    if (window.location.pathname) {
      setPostId(window.location.pathname.split('/')[2]);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [history]);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  const btnModal = document.getElementById(`btnModal_${postId}`);
  const { top } = btnModal?.getBoundingClientRect() ?? {};
  const elDistanceToTop = window.scrollY + (top ?? 0);

  return ReactDOM.createPortal(
    <div
      className={styles.modal}
      ref={ref}
      style={{ top: `${elDistanceToTop}px` }}>
      <div className={styles.topPost}>
        <h2 className={styles.title}>{title}</h2>

        <button
          type='button'
          className={styles.close}
          onClick={() => history.push('/posts')}>
          <IconClose />
        </button>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          Есть над чем задуматься: тщательные исследования конкурентов
          представляют собой не что иное, как квинтэссенцию победы маркетинга
          над разумом и должны быть ассоциативно распределены по отраслям.
          Прежде всего, начало повседневной работы по формированию позиции
          однозначно фиксирует необходимость кластеризации усилий. Но сторонники
          тоталитаризма в науке и по сей день остаются уделом либералов, которые
          жаждут быть превращены в посмешище, хотя само их существование
          приносит несомненную пользу обществу.
        </p>
        <p className={styles.description}>
          Безусловно, глубокий уровень погружения создаёт необходимость
          включения в производственный план целого ряда внеочередных мероприятий
          с учётом комплекса системы массового участия. Внезапно, сделанные на
          базе интернет-аналитики выводы освещают чрезвычайно интересные
          особенности картины в целом, однако конкретные выводы, разумеется,
          описаны максимально подробно.
        </p>
        <p className={styles.description}>
          Разнообразный и богатый опыт говорит нам, что выбранный нами
          инновационный путь обеспечивает широкому кругу (специалистов) участие
          в формировании новых принципов формирования материально-технической и
          кадровой базы. Также как существующая теория в значительной степени
          обусловливает важность благоприятных перспектив. Для современного мира
          консультация с широким активом однозначно определяет каждого участника
          как способного принимать собственные решения касаемо приоритизации
          разума над эмоциями!
        </p>
      </div>

      <CommentFormContainer />

      <div className={styles.sortContainer}>
        <label className={styles.labelComment} htmlFor='sortComments'>
          Сортировать по:
        </label>
        <select
          className={styles.selectComment}
          name='sortComments'
          id='sortComments'>
          <option value='Лучшие'>Лучшие</option>
          <option value='Новые'>Новые</option>
        </select>
      </div>
      <div className={styles.divider} />

      {commentsData.map((item) => (
        <Comments
          key={item.commentId}
          commentId={item.commentId}
          author={item.author}
          parentId={item.parentId}
          body={item.body}
          createdAt={item.createdAt}
        />
      ))}
    </div>,
    node,
  );
}
