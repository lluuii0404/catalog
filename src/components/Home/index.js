import React from 'react';
import {connect} from "react-redux";

import { NavLink } from "react-router-dom";

import * as ROUTES from "../../utils/routes";

export const HomeComponent = ({...props}) => {
  const {user} = props;
  return (
    <>
      Hello guys. <br/>
      Nice to meet you!<br/>
      Now, you here in platform to buy or pain different products.<br/>
      You can replace this your product and keep calm.<br/>
      So, click to <NavLink to={ROUTES.CATALOG}>"Catalog"</NavLink> and let's go.<br/>

      {!user && <>P.S.Psss... You must be registred. <NavLink to={ROUTES.SIGN_UP}> Sign up </NavLink><br/></> }

    </>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user
})
export const Home = connect(mapStateToProps)(HomeComponent)
