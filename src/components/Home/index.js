import React from 'react';

import { NavLink } from "react-router-dom";

import * as ROUTES from "../../utils/routes";

export const Home = () => {
  return (
    <>
      Hello guys. <br/>
      Nice to meet you!<br/>
      Now, you here in platform to buy or pain different products.<br/>
      You can replace this your product and keep calm.<br/>
      So, click to <NavLink to={ROUTES.CATALOG}>"Catalog"</NavLink> and let's go.<br/>

      P.S. Psss... You must be registred. <NavLink to={ROUTES.SIGN_UP}> Sign up </NavLink><br/>

    </>
  );
};
