import moment from 'moment';

export const loaderElement = document.getElementById('spinner');

export const dateToTimestamp = (date) => moment(date, 'DD-MM-YYYY').valueOf();
export const dateEndSale = (date) => {
  if (date) {
    return moment(Number(date)).startOf('day').format('ddd DD.MM.YYYY');
  }
};

export const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

export const checkWidthAndHeight = ({
  photo,
  rules: { minWidth, minHeight, maxWidth, maxHeigh }, // size in kb
}) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = function () {
      const height = this.height;
      const width = this.width;
      if (height > maxHeigh) {
        resolve(`Picture height should not exceed ${maxHeigh}px`);
        return;
      }
      if (width > maxWidth) {
        resolve(`Picture width should not exceed ${maxWidth}px`);
        return;
      }
      if (width < minWidth) {
        resolve(`Picture width should not be less than ${minWidth}px`);
        return;
      }
      if (height < minHeight) {
        resolve(`Picture height should not be less than ${minHeight}px`);
        return;
      }
      resolve('');
    };
    image.onerror = reject;
    image.src = photo;
  });

export const photoValidation = async ({ file, rules }) => {
  if (file.type.indexOf('image') == -1) {
    return 'File not supported';
  }
  const dataUrl = await readFileAsync(file);
  const response = await checkWidthAndHeight({ photo: dataUrl, rules: rules });
  if (response) {
    return response;
  }
  return '';
};
