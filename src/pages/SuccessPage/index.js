import React from 'react';

import { SuccessComponent } from "../../components/Success";

import styles from './styles.module.scss'

export const SuccessPage = ({...props}) => {
  return (
    <div className={styles.container}>
      <SuccessComponent {...props} />
    </div>
  )
};
