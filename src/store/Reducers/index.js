import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { productReducer } from "./productReducer";
import { currentProductReducer } from "./currentProductReducer";
import { authReducer } from "./authReduser";


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  product: productReducer,
  currentProduct: currentProductReducer,
  auth: authReducer,
});

export default rootReducer;

