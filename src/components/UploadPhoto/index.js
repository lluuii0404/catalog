import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhotoView from '../PhotoView';
import styles from './styles.module.scss';
import { readFileAsync } from '../../utils/helper';
import uploadPlaceholder from '../../assets/styles/images/upload-placeholder.jpg';

const UploadPhoto = ({ input: { value, onChange, ...input }, meta }) => {
  const [photo, setPhoto] = useState(null);

  const handleChange = async ({ target }) => {
    onChange(target.files);
    const photo = await readFileAsync(target.files[0]);
    setPhoto(photo);
  };

  const currentPhoto = photo || uploadPlaceholder;

  return (
    <div>
      <label className={styles.label} htmlFor="upload-photo">
        <PhotoView alt="Your Photo" src={currentPhoto} />
        <input
          className={styles.input}
          id="upload-photo"
          {...input}
          type="file"
          onChange={handleChange}
        />
      </label>
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

UploadPhoto.propTypes = {
  input: PropTypes.any,
  meta: PropTypes.any,
};

export default UploadPhoto;
