import React from 'react'
import { SignIn as SignInComponent } from "../../components/Auth/SignIn";

import styles from './styles.module.scss'

export const SignIn = ({...props}) => (
  <div className={styles.containerIn}>
    <h1>Sign In</h1>
    <SignInComponent {...props}/>
  </div>
);
