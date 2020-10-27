export const validation = values => {
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


// const rules = {
//   email: /^\w+([\._%+-]?\w+)*@^[a-z]\.com$/i,
//   personName: /^[a-z'-]{3,32}$/i,
//   password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/
// }
//
// export const required = value => (value ? undefined : 'Required')
// export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
// export const minValue = min => value => isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
// export const isEmail = errMessage => value =>
//   rules.email.test(value) ? null : errMessage ? errMessage : 'Invalid email address'
//
// export const isPassword = value => {
//   console.log(">>> ", rules.password.test(value), " <<< rules.password.test(value) <<<");
//   console.log(">>> ", value, " <<< value <<<");
//   return rules.password.test(value) ? null : 'Invalid password'
// }
//
// export const isPasswordConfirm = (value, values) => {
//   console.log(">>> ", value, values, " <<< value, values <<<");
//   const isValue = rules.password.test(value);
//   if (!isValue) {
//     return 'Invalid password'
//   }
//   if (isValue && values.password !== value) {
//     return 'Passwords mismatch'
//   }
//   return null
// }
//
// export const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined)
//
//
// class Validation {
//   rules = {
//     email: /^\w+([\._%+-]?\w+)*@(technorely|sheerchain)\.com$/i,
//     personName: /^[a-z'-]{3,32}$/i,
//     password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
//   }
//
//   required = (errMessage) => value => {
//     return value ? null : errMessage ? errMessage : "Required"
//   }
//
// // public isNumber = (errMessage?: string) => (value: number): unstring => {
// //   return !isNaN(value) ? null : errMessage ? errMessage : messages.isNumber
// // }
// // public isInteger = (errMessage?: string) => (value: number): unstring => {
// //   return !value.toString().match(/\D/gi) ? null : errMessage ? errMessage : messages.isNumber
// // }
//
//   isEmail = errMessage => value =>
//   this.rules.email.test(value) ? null : errMessage ? errMessage : 'Invalid email address'
//
//   isPassword = errMessage => value =>
//   this.rules.password.test(value) ? null : errMessage ? errMessage : 'Invalid password'
//
//   isPasswordConfirm = errMessage => (value, values) => {
//     const isValue = this.rules.password.test(value)
//     if (!isValue) {
//       return 'Invalid password'
//     }
//     if (isValue && values.password !== value) {
//       return errMessage ? errMessage : 'Passwords mismatch'
//     }
//     return null
//   }
//
//   minValue = min => value => value.length >= min ? null : `Should be greater than ${min}`
//
//   maxValue = max => value => value.length <= max ? null : `Should be less than ${max}`
//
//   min = min => value => Number(value) >= min ? null : `Should be greater than ${min}`
//
//   max = max => value => Number(value) <= max ? null : `Should be less than ${max}`
//
//   composeValidators = (...validators) => (value, values) =>
//     validators.reduce((error, validator) => error || validator(value, values), null)
// }
//
// const validation = new Validation()
// export default validation
