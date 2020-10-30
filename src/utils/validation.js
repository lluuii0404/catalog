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
