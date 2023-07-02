import React, { useContext } from 'react';
import styles from './cardlist.css';
import { Card } from './Card/Card';
import { postsContext } from '../context/postsContext';

export function CardList() {
  const { data, loading, errorLoading, bottomOfList, count, handleClick } =
    useContext(postsContext);
  // console.log('postsData >>', data);

  return (
    <ul className={styles.cardList}>
      {data.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center', fontSize: '24px' }}>
          Нет ни одного поста
        </div>
      )}

      {data.map((post) => (
        <Card
          key={post.postId}
          postId={post.postId}
          avatarSrc={post.avatarSrc}
          author={post.author}
          createdAt={post.createdAt}
          title={post.title}
          previewImg={post.previewImg}
          rating={post.rating}
        />
      ))}

      {count === 3 ? (
        <button className={styles.button} type='button' onClick={handleClick}>
          Load more
        </button>
      ) : (
        <div ref={bottomOfList} />
      )}

      {loading && (
        <div style={{ textAlign: 'center', fontSize: '24px' }}>Загрузка...</div>
      )}

      {errorLoading && (
        <div role='alert' style={{ textAlign: 'center', fontSize: '24px' }}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
