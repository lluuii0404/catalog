import React, {useEffect} from 'react';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import { signOut } from "../../actions/actionsAuth";

import * as ROUTES from '../../utils/routes';

import styles from './styles.module.scss'

const NavigationComponent = ({...props}) => {
  const { user, signOut } = props;

  useEffect(() => {}, [user])

  const handleSignOut = event => {
    event.preventDefault();
    signOut();
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {
          !user && (
            <li className={styles.link}>
              <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
          )
        }
        <li className={styles.link}>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className={styles.link}>
          <Link to={ROUTES.CATALOG}>Catalog</Link>
        </li>
        {
          user && (
          <li className={styles.link}>
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
          )
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)
