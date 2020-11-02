import React from 'react';

import classnames from 'classnames';
import styles from './styles.module.scss';
import productPlaceholder from '../../assets/styles/images/product-placeholder.png';

const PhotoView = ({ src, alt, className }) => (
  <img src={src ? src : productPlaceholder} alt={alt} className={classnames(styles.img, className)} />
);

export default PhotoView;
