import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR
} from "../../actions/actionTypes";
import {toast} from "react-toastify";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return state;
    }
    case ADD_PRODUCT_ERROR: {
      toast.error("Error. Image too big (max 1 MB).");
      return state;
    }
    default:
      return state;
  }
}
