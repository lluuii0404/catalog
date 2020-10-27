import React from 'react';
import { Redirect } from "react-router-dom";

import * as ROUTES from "../../utils/routes";

export const Home = () => {
  const redirect = <Redirect to={ROUTES.CATALOG} />
  return (
    <>
      {redirect}
    </>
  );
};
