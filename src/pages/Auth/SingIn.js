import React from 'react'
import { SignIn as SignInComponent } from "../../components/Auth/SignIn";

export const SignIn = ({...props}) => (
  <div>
    <h1>Sign In</h1>
    <SignInComponent {...props}/>
  </div>
);
