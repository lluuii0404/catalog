import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

const PhotoView = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={classnames(styles.img, className)} />
);

PhotoView.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

PhotoView.defaultProps = {
  alt: '*',
  src: require('../../assets/styles/images/product-placeholder.png'),
};

export default PhotoView;
