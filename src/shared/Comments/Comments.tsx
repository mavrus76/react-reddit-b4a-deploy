import React, { useState } from 'react';
import styles from './comments.css';
import { Icon } from '../Icon';
import { EColors, EIcons } from '../../types/enums';
import { Text } from '../Text';
import { Break } from '../Break';
import { getDays } from '../../utils/js/getDays';
import { getHours } from '../../utils/js/getHours';
import { ReplyForm } from '../ReplayForm';

interface IComments {
  commentId?: string;
  parentId?: string;
  author?: string;
  body?: string;
  createdAt?: number;
}

export function Comments({
  commentId,
  parentId,
  author,
  body,
  createdAt = 0,
}: IComments) {
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);
  const daysAgo = getDays(createdAt);
  const hoursAgo = getHours(createdAt);

  return (
    <div className={styles.commentsContainer}>
      <div className={styles.authorContainer}>
        <div className={styles.author}>{author}</div>
        <div className={styles.createdAt}>
          {parseInt(hoursAgo.split(' ')[0], 10) < 24 ? hoursAgo : daysAgo}
        </div>
        <div className={styles.badge}>Лига юристов</div>
      </div>
      <div className={styles.body}>{body}</div>

      {isReplyFormOpen && <ReplyForm />}

      <button
        type='button'
        className={styles.buttonSend}
        onClick={() => setIsReplyFormOpen(true)}>
        <Icon name={EIcons.comments} size={14} />
        <Break size={4} />
        <Text size={14} color={EColors.grey99}>
          Отправить
        </Text>
      </button>
    </div>
  );
}

Comments.defaultProps = {
  commentId: null,
  parentId: null,
  author: null,
  body: null,
  createdAt: 0,
};
