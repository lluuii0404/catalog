import React, {useEffect} from 'react';
import {connect} from "react-redux";

import { Field, Form } from "react-final-form";
import { SignUpLink } from "../SignUp";

import { validationSignIn } from "../../../utils/validation";
import { signIn } from "../../../actions/actionsAuth";

import * as ROUTES from '../../../utils/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
}

const SignInForm = ({...props}) =>  {
  console.log(">>> ", props, " <<< props <<<");

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
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({input, meta}) => (
                  <div>
                    <label>Enter Email</label>
                    <input {...input} type="text" placeholder="Email"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({input, meta}) => (
                  <div>
                    <label>Enter Password</label>
                    <input {...input} type="password" placeholder="Password"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button
                  type="submit"
                  // disabled={submitting}
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
