import React from 'react'
import { SignUp as SignUpComponent } from "../../components/Auth/SignUp";


export const SignUp = ({...props}) => (
  <div>
    <h1>Sign Up</h1>
    <SignUpComponent {...props} />
  </div>
);
