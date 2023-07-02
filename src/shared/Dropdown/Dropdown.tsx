import React, { useEffect, useState } from 'react';
import styles from './dropdown.css';
import { noop } from '../../utils/js/noop';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({
  button,
  children,
  isOpen,
  onClose = noop,
  onOpen = noop,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen !== undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={styles.container}>
      <div
        role='button'
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleOpen();
          }
        }}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div
            role='menuitem'
            className={styles.list}
            onClick={() => setIsDropdownOpen(false)}
            onKeyDown={(event) => {
              if (event.key === 'Escape' || event.key === 'Tab') {
                setIsDropdownOpen(false);
              }
            }}
            tabIndex={0}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

Dropdown.defaultProps = {
  isOpen: false,
  onOpen: noop,
  onClose: noop,
};
