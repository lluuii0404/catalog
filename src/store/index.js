import { applyMiddleware, createStore } from "redux";
import { getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";

import rootReducer from './Reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

export default store;
