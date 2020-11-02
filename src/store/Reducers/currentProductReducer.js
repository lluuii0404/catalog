import {
  GET_CURRENT_PRODUCT,
  GET_CURRENT_PRODUCT_ERROR,
  UPDATE_CURRENT_PRODUCT,
  UPDATE_CURRENT_PRODUCT_ERROR
} from "../../actions/actionTypes";
import {toast} from "react-toastify";

export const currentProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_PRODUCT: {
      return {
        product: action.data,
      };
    }
    case GET_CURRENT_PRODUCT_ERROR: {
      const message = action.error && action.error.message
      toast.error(message)
      return {
        error: action.error
      }
    }

    case UPDATE_CURRENT_PRODUCT: {
      toast.success('Product update.')
      return {
        product: action.data,
      };
    }
    case UPDATE_CURRENT_PRODUCT_ERROR: {
      const message = action.error && action.error.message
      toast.error(message)
      return {
        error: action.error
      }
    }
    default:
      return state;
  }
}
