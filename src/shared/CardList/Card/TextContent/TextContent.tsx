import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import styles from './textcontent.css';
import { getDays } from '../../../../utils/js/getDays';
import { getHours } from '../../../../utils/js/getHours';

interface ITextContentProps {
  postId?: string;
  avatarSrc?: string;
  author?: string;
  createdAt?: number;
  title?: string;
}

export function TextContent({
  postId,
  avatarSrc,
  author,
  createdAt = 0,
  title,
}: ITextContentProps) {
  const createdDatePost = format(new Date(createdAt), 'dd MMMM yyyy', {
    locale: ru,
  });
  const daysAgo = getDays(createdAt);
  const hoursAgo = getHours(createdAt);

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={avatarSrc} alt='avatar' />
          <a className={styles.username} href='#user-url'>
            {author}
          </a>
        </div>
        <span className={styles.createAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          <span className={styles.publishedDate}>{createdDatePost}</span>
          <span className={styles.publishedDays}>
            {parseInt(hoursAgo.split(' ')[0], 10) < 24 ? hoursAgo : daysAgo}
          </span>
        </span>
      </div>
      <h2 className={styles.title}>
        <Link
          className={styles.postLink}
          id={`btnModal_${postId}`}
          to={`/posts/${postId}`}>
          {title}
        </Link>
      </h2>
    </div>
  );
}

TextContent.defaultProps = {
  postId: null,
  avatarSrc: null,
  author: null,
  createdAt: 0,
  title: null,
};
