import React from 'react';
import styles from './page404.css';

export function Page404() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.number}>404</div>
        <div className={styles.string}>Not Found</div>
      </div>
    </div>
  );
}
