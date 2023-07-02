import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface ICardProps {
  postId?: string;
  author?: string;
  title?: string;
  previewImg?: string;
  createdAt?: number;
  avatarSrc?: string;
  rating?: number;
}

export function Card({
  postId,
  author,
  title,
  avatarSrc,
  createdAt,
  previewImg,
  rating,
}: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent
        postId={postId}
        avatarSrc={avatarSrc}
        author={author}
        createdAt={createdAt}
        title={title}
      />
      <Preview previewImg={previewImg} />
      <Menu postId={postId} />
      <Controls rating={rating} />
    </li>
  );
}

Card.defaultProps = {
  postId: null,
  avatarSrc: null,
  author: null,
  createdAt: null,
  title: null,
  previewImg: null,
  rating: null,
};
