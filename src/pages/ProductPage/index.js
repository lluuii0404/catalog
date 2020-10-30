import React from 'react';

import { Product as ProductComponent } from "../../components/NewProduct";

export const ProductPage = ({...props}) => {
  return (
    <ProductComponent {...props} />
  )
};
