import React from 'react';

import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import * as ROUTES from "../../../utils/routes";
import { validationSignUp } from "../../../utils/validation";

const INITIAL_STATE = {
  // email: 'user@mail.com',
  // password: 'qwerty@1',
  // confirm: 'qwerty@1'
  email: '',
  password: '',
  confirm: '',
  error: null
}

export const SignUpForm = ({...props}) =>  {
  // const {firebase} = props;

  const onSubmit = values => {
    console.log(">>> ", values, " <<< event <<<");

    // event.preventDefault();
  }

  return (
    <>
    <Form
      initialValues={INITIAL_STATE}
      validate={validationSignUp}
      onSubmit={onSubmit}
      render={({ handleSubmit,  submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="text" placeholder="Email" autoComplete='off' />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" autoComplete='off' />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="confirm">
            {({ input, meta }) => (
              <div>
                <label>Confirm password</label>
                <input {...input} type="password" placeholder="Confirm password" autoComplete='off' />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button
              type="submit"
              disabled={submitting}
            >
              Sign Up
            </button>
          </div>
        </form>
      )}
    />
    </>
  );
}

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
