import React from 'react';

import { Field, Form } from "react-final-form";

import { validation } from "../../../utils/validation";
import {SignUpLink} from "../SignUp";

const INITIAL_STATE = {
  email: '',
  password: '',
  // confirm: '',
  error: null
}

export const SignInForm = ({...props}) =>  {

  const onSubmit = values => {
    console.log(">>> ", values, " <<< event <<<");
  }

  return (
    <>
      <Form
        initialValues={INITIAL_STATE}
        validate={validation}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, values }) => {
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
                  disabled={submitting}
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

