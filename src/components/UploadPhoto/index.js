import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhotoView from '../PhotoView';
import styles from './styles.module.scss';
import { photoValidation, readFileAsync } from '../../utils/helper';
import uploadPlaceholder from '../../assets/styles/images/upload-placeholder.jpg';
import { toast } from 'react-toastify';

const UploadPhoto = ({ input: { value, onChange, ...input }, meta }) => {
  const [photo, setPhoto] = useState(null);

  const handleChange = async ({ target }) => {
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
      onChange(null);
      setPhoto(null);
      toast.error(validationResponse);
      return;
    }
    const photo = await readFileAsync(target.files[0]);
    onChange(target.files);
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
