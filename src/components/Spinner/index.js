import React from 'react';

import styles from './style.module.scss';

export const Spinner = () => (
  <div className={styles.spinner_container}>
    <div className={styles.loader} />
  </div>
);
