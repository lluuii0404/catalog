import React from 'react';

import { NavLink } from 'react-router-dom';
import { CheckCircleTwoTone } from '@ant-design/icons';

import { useLastLocation } from 'react-router-last-location';

import * as ROUTES from '../../utils/routes';
import styles from './styles.module.scss';

export const SuccessComponent = () => {
  const lastLocation = useLastLocation();

  const isUpdateProduct = lastLocation.pathname.match(/\/update/);
  const successText = isUpdateProduct
    ? 'Product was update.'
    : 'Product was create.'

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <CheckCircleTwoTone twoToneColor="#149B58" style={{fontSize: 80}} />
      </div>
      <div className={styles.text}>{successText}</div>
      <div className={styles.buttons}>
        <NavLink to={ROUTES.CATALOG}> Go to Catalog</NavLink>
      </div>
    </div>
  )
};
