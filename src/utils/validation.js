export const validationSignUp = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirm) {
    errors.confirm = "Required";
  } else if (values.confirm !== values.password) {
    errors.confirm = "Must match";
  }
  return errors;
}

export const validationSignIn = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
}

export const validationProductForm = values => {
  const errors = {};
  const price = Number(values.price);

  const rgx = /^[0-9]*\.?[0-9]*$/;
  const onlyNumber = values.price && !!values.price.match(rgx);

  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length < 20) {
    errors.title = "The title must be more than 20 characters.";
  } else if (values.title.length > 61) {
    errors.title = "The title must be less than 60 characters.";
  }

  if (!values.photo) {
    errors.photo = "Required";
  }

  if (values.description.length > 200) {
    errors.description = "The description must be less than 200 characters.";
  }

  if (!values.price) {
    errors.price = "Required";
  } else if (!onlyNumber) {
    errors.price = "The price must be only number and with dot";
  } else if ( price < 0) {
    errors.price = "The price must be greater than 0";
  } else if ( price > 99999999.99) {
    errors.price = "The price must be less than 99999999.99";
  }

  if(values.sale) {
    if (!!values.percent){
      if(values.percent < 10 ) {
        errors.percent = "The percent must be greater than 10";
      } else  if(values.percent > 90 ) {
        errors.percent = "The percent must be less than 90";
      }
    }

    if (!values.dateOffSale){
      errors.dateOffSale = "Required";
    }
  }
  return errors;
}
