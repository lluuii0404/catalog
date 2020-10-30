import moment from "moment";

export const loaderElement = document.getElementById('spinner');

export const dateToTimestamp = date => moment( date, 'DD-MM-YYYY').valueOf()
export const dateEndSale = date => {
  if (date) {
    return moment(Number(date)).startOf('day').format('ddd DD.MM.YYYY');
  }
};
