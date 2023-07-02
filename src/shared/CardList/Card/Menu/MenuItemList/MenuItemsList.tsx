/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styles from './menuitemslist.css';
import {
  IconComments,
  IconComplain,
  IconHide,
  IconSave,
  IconShare,
  IconShareLight,
} from '../../../../icons';
import { Text } from '../../../../Text';
import { EColors, EIcons } from '../../../../../types/enums';
import { IconSaveLight } from '../../../../icons/IconSaveLight';
import { Icon } from '../../../../Icon';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  const handleButtonClick = () => {
    console.log(postId);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      console.log(postId);
    }
  };
  const classesHideMenuItem = `${styles.menuItem} ${styles.mobile}`;
  const classesHideDivider = `${styles.divider} ${styles.mobile}`;

  return (
    <ul className={styles.menuItemsList}>
      <li className={classesHideMenuItem}>
        <Icon name={EIcons.comments} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Комментарии
        </Text>
      </li>

      <div className={classesHideDivider} />

      <li className={classesHideMenuItem}>
        <Icon name={EIcons.shareLight} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Поделиться
        </Text>
      </li>

      <div className={classesHideDivider} />

      <li
        className={styles.menuItem}
        onClick={handleButtonClick}
        onKeyDown={handleKeyPress}>
        <Icon name={EIcons.hide} mobileSize={12} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={classesHideMenuItem}>
        <Icon name={EIcons.saveLight} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Сохранить
        </Text>
      </li>

      <div className={classesHideDivider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.complain} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
