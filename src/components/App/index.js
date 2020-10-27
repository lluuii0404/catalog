import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import { Navigation } from "../Navigation";
import { SignUp as SignUpPage } from '../../pages/Auth/SingUp';
import { SignIn as SignInPage } from '../../pages/Auth/SingIn';
import { Home as HomePage } from '../Home';

import * as ROUTES from "../../utils/routes";
import history from "../../utils/history";

const App = () => {
  console.log(">>> ", 1111, " <<< 1111 <<<");

  return (
    <Router history={history}>
      <div>
        <Navigation />

        <hr />

        {/*<Route path="/sign" component={SignUpPage} />*/}
        {/*<PrivateRoute path="/catalog">*/}
        {/*  {*/}
        {/*    () => {*/}
        {/*      return(*/}
        {/*        <div>*/}
        {/*         <h1>CATALOG</h1>*/}
        {/*          <button>Add</button>*/}
        {/*          <div>*/}
        {/*            <ul>*/}
        {/*              <li>1</li>*/}
        {/*              <li>2</li>*/}
        {/*              <li>3</li>*/}
        {/*            </ul>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      )*/}
        {/*    }*/}
        {/*  }*/}
        {/*</PrivateRoute>*/}
        {/*<PrivateRoute path="/catalog/new-item">*/}
        {/*  /!*<ProtectedPage />*!/*/}
        {/*</PrivateRoute>*/}
        {/*<PrivateRoute path="/catalog/update-item/:id">*/}
        {/*  /!*<ProtectedPage />*!/*/}
        {/*</PrivateRoute>*/}

        <Switch>
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.CATALOG} component={HomePage} />
          <Route path={ROUTES.NEW_ITEM} component={HomePage} />
          <Route path={ROUTES.UPDATE_ITEM} component={HomePage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
