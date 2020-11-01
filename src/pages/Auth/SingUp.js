import React from 'react'
import { SignUp as SignUpComponent } from "../../components/Auth/SignUp";

import styles from "./styles.module.scss";

export const SignUp = ({...props}) => (
  <div className={styles.containerUp}>
    <h1>Sign Up</h1>
    <SignUpComponent {...props} />
  </div>
);
