import React from 'react';
import {connect} from "react-redux";

import { NavLink } from "react-router-dom";

import * as ROUTES from "../../utils/routes";

import styles from './styles.module.scss'

export const HomeComponent = ({...props}) => {
  const {user} = props;
  return (
    <div className={styles.container}>
      <p className={styles.title}>Hello guys.</p>
      <p className={styles.subtitle}>Nice to meet you!</p>
      <p>Now, you here in platform to buy or pay different products.</p>
      <p>You can replace this your product and keep calm.</p>
      <p>So, click to <NavLink to={ROUTES.CATALOG}>«Catalog»</NavLink> and let's go.</p>

      <p>{!user && <>P.S. Psss... You must be registered. <NavLink to={ROUTES.SIGN_UP}> Sign up </NavLink></> }</p>

    </div>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user
})
export const Home = connect(mapStateToProps)(HomeComponent)
