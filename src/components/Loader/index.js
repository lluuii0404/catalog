import React from 'react';
import { createPortal } from 'react-dom';
import Loader from 'react-loaders';

import { loaderElement } from '../../utils/helper';
// import 'rea'
import './style.scss';

export const Loading = () => {
  const loaderJSX = (
    <div className="backDrop">
      <div className="modal">
        <Loader type="ball-spin-fade-loader" active />
      </div>
    </div>
  );
  return createPortal(loaderJSX, loaderElement);
};
