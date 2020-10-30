import React, {useEffect} from 'react';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import { signOut } from "../../actions/actionsAuth";

import * as ROUTES from '../../utils/routes';

const NavigationComponent = ({...props}) => {
  const { user } = props;
  useEffect(() => {}, [user])

  const handleSignOut = event => {
    event.preventDefault();
  }

  return (
    <div>
      <ul>
        {
          !user && (
            <li>
              <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
          )
        }
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.CATALOG}>Catalog</Link>
        </li>
        {
          user && (
          <li>
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
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: user => dispatch(signOut(user))
  }
}
export const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)
