import React, {useEffect} from 'react';
import {connect} from "react-redux";

import { Field, Form } from "react-final-form";
import { SignUpLink } from "../SignUp";

import { validationSignIn } from "../../../utils/validation";
import { signIn } from "../../../actions/actionsAuth";

import * as ROUTES from '../../../utils/routes';

import styles from '../styles.module.scss'

const INITIAL_STATE = {
  email: '',
  password: '',
}

const SignInForm = ({...props}) =>  {
  const {signIn, user, history} = props;

  useEffect(() => {
    if (user){
      history.push(ROUTES.CATALOG)
    }
  }, [user]);

  const onSubmit = values => signIn(values);

  return (
    <>
      <Form
        initialValues={INITIAL_STATE}
        validate={validationSignIn}
        onSubmit={onSubmit}
        render={({ handleSubmit,  errors }) => {
          const idDisabled = Object.keys(errors).length > 0;
          return (
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({input, meta}) => (
                  <div className={styles.field}>
                    <label className={styles.label}>Enter Email</label>
                    <input {...input} type="text" placeholder="Email"/>
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({input, meta}) => (
                  <div className={styles.field}>
                    <label className={styles.label} >Enter Password</label>
                    <input {...input} type="password" placeholder="Password"/>
                    {meta.error && meta.touched && <span className={styles.error} >{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className={styles.buttons}>
                <button
                  type="submit"
                  className={idDisabled ? styles.disabled : styles.activate}
                >
                  Sign In
                </button>
              </div>
              <SignUpLink/>
            </form>
          );
        }}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: user => dispatch(signIn(user))
  }
}
export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInForm)
