import React, { useState } from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../../shared/Dropdown';
import { IconMenuDots } from '../../../icons';
import { MenuDropdown } from './MenuDropdown';

interface IMenuProps {
  postId?: string;
}

export function Menu({ postId }: IMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const btnDropdown = document.getElementById(`btnDropdown_${postId}`);
  const { top, left, right, bottom } =
    btnDropdown?.getBoundingClientRect() ?? {};
  const elDistanceToTop = window.pageYOffset + (bottom ?? 0) + 10;
  const elDistanceToLeft = window.pageXOffset + (left ?? 0) - 137;

  return (
    <div className={styles.menu}>
      <Dropdown
        onClose={() => setIsDropdownOpen(false)}
        onOpen={() => setIsDropdownOpen(true)}
        isOpen={isDropdownOpen}
        button={
          <button
            className={styles.menuButton}
            type='button'
            id={`btnDropdown_${postId}`}>
            <IconMenuDots />
          </button>
        }>
        {isDropdownOpen && (
          <MenuDropdown
            onClose={() => setIsDropdownOpen(false)}
            top={elDistanceToTop}
            left={elDistanceToLeft}
          />
        )}
      </Dropdown>
    </div>
  );
}

Menu.defaultProps = {
  postId: null,
};
