import React from 'react';

import PhotoView from '../PhotoView';

import { photoValidation, readFileAsync } from '../../utils/helper';
import { toast } from 'react-toastify';

import styles from './styles.module.scss';
import uploadPlaceholder from '../../assets/styles/images/upload-placeholder.jpg';

const UploadPhoto = ({ input: { value, onChange, ...input }, meta }) => {
  const handleChange = async ({ target }) => {
    if (!target.files[0]) {
      return;
    }
    const validationResponse = await photoValidation({
      file: target.files[0],
      rules: {
        minWidth: 200,
        minHeight: 200,
        maxWidth: 4000,
        maxHeigh: 4000,
      },
    });

    if (validationResponse) {
      toast.error(validationResponse);
      return;
    }
    const photo = await readFileAsync(target.files[0]);
    onChange(photo);
  };

  const currentPhoto = value || uploadPlaceholder;

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

export default UploadPhoto;
