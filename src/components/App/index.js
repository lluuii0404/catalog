import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import { Navigation } from "../Navigation";
import { SignUp as SignUpPage } from '../../pages/Auth/SingUp';
import { SignIn as SignInPage } from '../../pages/Auth/SingIn';
import { Home as HomePage } from '../../pages/Home';
import { Catalog as CatalogPage } from '../../pages/Catalog';
import { ProductPage } from "../../pages/ProductPage";

import * as ROUTES from "../../utils/routes";
import history from "../../utils/history";

const App = () => {
  console.log(">>> ", 1111, " <<< 1111 <<<");

  return (
    <Router history={history}>
      <div>
        <Navigation />

        <hr />

        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.CATALOG} component={CatalogPage} />
        <Route exact path={ROUTES.NEW_ITEM} component={ProductPage} />
        <Route exact path={[ROUTES.UPDATE_ITEM, `${ROUTES.UPDATE_ITEM}/:id`]} component={ProductPage} />

      </div>
    </Router>
  );
}

export default App;
