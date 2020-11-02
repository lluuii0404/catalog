import React from 'react';

import { Product as ProductComponent } from "../../components/NewProduct";

import styles from './styles.module.scss'

export const ProductPage = ({...props}) => {
  return (
    <div className={styles.container}>
      <ProductComponent {...props} />
    </div>
  )
};
