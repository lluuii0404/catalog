import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR
} from "../../actions/actionTypes";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      console.log(">>> add a product <<<");
      return state;
    }
    case ADD_PRODUCT_ERROR: {
      console.log(">>> an error <<<");
      return state;
    }
    default:
      return state;
  }
}
