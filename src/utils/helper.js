import moment from 'moment';
import * as ROUTES from "./routes";

export const root = {
  'home' : ROUTES.HOME,
  'signIn' : ROUTES.SIGN_IN,
  'catalog' : ROUTES.CATALOG
}

export const dateToTimestamp = (date) => moment(date).valueOf();

export const dateEndSale = (date) => {
  if (date) {
    return moment(Number(date)).startOf('day').format('ddd DD.MM.YYYY');
  }
};
export const daysLeft = (date) => {
  if (date) {
    const dayNow = moment().startOf('day');
    const dayEnd= moment(Number(date)).startOf('day');
    return dayEnd.diff(dayNow, 'days');
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
  if (file.size > 1000000 ) {
    return "Image too big (max 1 MB). Because firestore allows you to upload docs up to 1 MB in size";
  }
  const dataUrl = await readFileAsync(file);
  const response = await checkWidthAndHeight({ photo: dataUrl, rules: rules });
  if (response) {
    return response;
  }
  return '';
};
