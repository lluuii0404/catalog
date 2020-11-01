import React from 'react';
import { connect } from "react-redux";

import { Route, BrowserRouter as Router} from "react-router-dom";
import { Navigation } from "../Navigation";
import { SignUp as SignUpPage } from '../../pages/Auth/SingUp';
import { SignIn as SignInPage } from '../../pages/Auth/SingIn';
import { Home as HomePage } from '../../pages/Home';
import { Catalog as CatalogPage } from '../../pages/Catalog';
import { ProductPage } from "../../pages/ProductPage";

import { reloadPage } from "../../actions/actionsAuth";

import history from "../../utils/history";
import storage from "../../utils/storage";
import * as ROUTES from "../../utils/routes";

const App = ({...props}) => {
  const { reloadPage } = props;

  const user = storage.get('user');
  if ( user && Object.keys(user).length > 0) {
    reloadPage(user)
  }

  return (
    <Router history={history}>
      <>
        <Navigation />

        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.CATALOG} component={CatalogPage} />
        <Route exact path={ROUTES.NEW_ITEM} component={ProductPage} />
        <Route exact path={[ROUTES.UPDATE_ITEM, `${ROUTES.UPDATE_ITEM}/:id`]} component={ProductPage} />

      </>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  reloadPage: user => dispatch(reloadPage(user))
})

export default connect(null, mapDispatchToProps)(App);
