import React, {useEffect} from 'react';
import {connect} from "react-redux";

import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { signUp } from "../../../actions/actionsAuth";

import * as ROUTES from "../../../utils/routes";
import { validationSignUp } from "../../../utils/validation";
import styles from "../styles.module.scss";

const INITIAL_STATE = {
  email: '',
  password: '',
  confirm: '',
}

export const SignUpForm = ({...props}) =>  {
  const { user, signUp, history } = props;

  useEffect(() => {
    if (user){
      history.push(ROUTES.CATALOG)
    }
  }, [user]);

  const onSubmit = values => {
    const data = {
      email: values.email,
      password: values.password
    }
    signUp(data);
  }

  return (
    <>
    <Form
      initialValues={INITIAL_STATE}
      validate={validationSignUp}
      onSubmit={onSubmit}
      render={({ handleSubmit, errors}) => {
        const idDisabled = Object.keys(errors).length > 0;
        return (
          <form onSubmit={handleSubmit}>
            <Field name="email">
              {({input, meta}) => (
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input {...input} type="text" placeholder="Email" autoComplete='off'/>
                  {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({input, meta}) => (
                <div className={styles.field}>
                  <label className={styles.label}>Password</label>
                  <input {...input} type="password" placeholder="Password" autoComplete='off'/>
                  {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="confirm">
              {({input, meta}) => (
                <div className={styles.field}>
                  <label className={styles.label}>Confirm password</label>
                  <input {...input} type="password" placeholder="Confirm password" autoComplete='off'/>
                  {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className={styles.buttons}>
              <button
                type="submit"
                className={idDisabled ? styles.disabled : styles.activate}
              >
                Sign Up
              </button>
            </div>
          </form>
        );
      }}
    />
    </>
  );
}

export const SignUpLink = () => (
  <p className={styles.link}>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user))
  }
}
export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
