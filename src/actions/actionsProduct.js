import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  GET_CURRENT_PRODUCT,
  GET_CURRENT_PRODUCT_ERROR,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_ERROR, UPDATE_CURRENT_PRODUCT, UPDATE_CURRENT_PRODUCT_ERROR
} from "./actionTypes";

export const addProduct = (product) => {
  return (dispatch, getState, {getFirebase}) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection('product')
      .add({
        ...product
      })
      .then(() => {
        dispatch({
          type: ADD_PRODUCT,
          product
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_ERROR,
          error
        });
      });
  }
}

export const removeProduct = (product) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("product")
      .doc(product.id)
      .delete()
      .then(() => {
        dispatch({
          type: REMOVE_PRODUCT,
        });
      })
      .catch((error) => {
        dispatch({
          type: REMOVE_PRODUCT_ERROR,
          error,
        });
      });
  };
};

export const getCurrentProduct = (id) => {
  return(dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("product")
      .doc(id)
      .get()
      .then((res) => {
        if (res.exists) {
          const data = res.data()
          dispatch({
            type: GET_CURRENT_PRODUCT,
            data
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_CURRENT_PRODUCT_ERROR,
          error,
        });
      });
  };
};

export const updateProduct = (product) => {
  return(dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("product")
      .doc(product.id)
      .set(product)
      .then(() => {
        dispatch({
          type: UPDATE_CURRENT_PRODUCT,
          product
        });

      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CURRENT_PRODUCT_ERROR,
          error,
        });
      });
  };
};

