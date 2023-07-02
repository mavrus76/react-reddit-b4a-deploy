import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './menudropdown.css';
import { GenericList } from '../../../../GenericList';
import { Icon } from '../../../../Icon';
import { Text } from '../../../../Text';
import { EColors, EIcons } from '../../../../../types/enums';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { merge } from '../../../../../utils/js/merge';
import { noop } from '../../../../../utils/js/noop';
import { useClickOut } from '../../../../hooks/useClickOut';

const classHideItem = `${styles.menuItem} ${styles.mobile}`;

const LIST = [
  {
    text: (
      <Text mobileSize={12} size={14} color={EColors.grey99}>
        Комментарии
      </Text>
    ),
    icon: <Icon name={EIcons.comments} mobileSize={12} size={14} />,
    className: classHideItem,
  },
  {
    text: (
      <Text mobileSize={12} size={14} color={EColors.grey99}>
        Поделиться
      </Text>
    ),
    icon: <Icon name={EIcons.shareLight} mobileSize={12} size={14} />,
    className: classHideItem,
  },
  {
    text: (
      <Text mobileSize={12} size={14} color={EColors.grey99}>
        Скрыть
      </Text>
    ),
    icon: <Icon name={EIcons.hide} mobileSize={12} size={14} />,
    className: styles.menuItem,
  },
  {
    text: (
      <Text mobileSize={12} size={14} color={EColors.grey99}>
        Сохранить
      </Text>
    ),
    icon: <Icon name={EIcons.saveLight} mobileSize={12} size={14} />,
    className: classHideItem,
  },
  {
    text: (
      <Text mobileSize={12} size={14} color={EColors.grey99}>
        Пожаловаться
      </Text>
    ),
    icon: <Icon name={EIcons.complain} mobileSize={12} size={14} />,
    className: styles.menuItem,
  },
].map(generateId);

interface IMenuDropdownProps {
  top?: number;
  left?: number;
  onClose?: () => void;
}

export function MenuDropdown({ top, left, onClose }: IMenuDropdownProps) {
  const [list, setList] = useState(LIST);
  const refDropdown = useClickOut(onClose);

  const handleItemClick = (id: string) => {
    console.log(id);
  };

  const node = document.getElementById('dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.dropdown}
      ref={refDropdown}
      style={{ top: `${top}px`, left: `${left}px` }}>
      <ul className={styles.menuItemsList}>
        <GenericList
          list={list.map(
            merge({
              As: 'li' as const,
              onClick: handleItemClick,
              divider: true,
            }),
          )}
        />
      </ul>

      <button type='button' className={styles.buttonClose}>
        <Text mobileSize={12} size={14} color={EColors.grey66}>
          Закрыть
        </Text>
      </button>
    </div>,
    node,
  );
}

MenuDropdown.defaultProps = {
  top: 0,
  left: 0,
  onClose: noop,
};
