import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR
} from "../../actions/actionTypes";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return state;
    }
    case ADD_PRODUCT_ERROR: {
      return state;
    }
    default:
      return state;
  }
}
