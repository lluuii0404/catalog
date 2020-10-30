import React from 'react';

import { Catalog as CatalogComponent } from '../../components/Catalog'

export const Catalog = ({...props}) => {
  return (
    <>
      <CatalogComponent {...props} />
    </>
  );
};

