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
