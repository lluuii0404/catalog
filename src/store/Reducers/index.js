import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { productReducer } from "./productReducer";
import { currentProductReducer } from "./currentProduct";


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  product: productReducer,
  currentProduct: currentProductReducer,
});

export default rootReducer;

