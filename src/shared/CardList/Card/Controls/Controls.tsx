import React from 'react';
import styles from './controls.css';
import { IconArrowUp, IconArrowDown } from '../../../icons';
import { EIcons } from '../../../../types/enums';
import { Icon } from '../../../Icon';

interface IControlsProps {
  rating?: number;
}

export function Controls({ rating }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <div className={styles.karmaCounter}>
        <button className={styles.up} type='button'>
          <IconArrowUp />
        </button>
        <span className={styles.karmaValue}>{rating}</span>
        <button className={styles.down} type='button'>
          <IconArrowDown />
        </button>
      </div>

      <button className={styles.commentsButton} type='button'>
        <Icon name={EIcons.comments} size={16} />
        <span className={styles.commentNumber}>13</span>
      </button>

      <div className={styles.actions}>
        <button className={styles.shareButton} type='button'>
          <Icon name={EIcons.share} size={20} />
        </button>

        <button className={styles.saveButton} type='button'>
          <Icon name={EIcons.save} size={20} />
        </button>
      </div>
    </div>
  );
}

Controls.defaultProps = {
  rating: null,
};
