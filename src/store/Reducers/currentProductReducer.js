import {
  GET_CURRENT_PRODUCT,
  GET_CURRENT_PRODUCT_ERROR,
  UPDATE_CURRENT_PRODUCT,
  UPDATE_CURRENT_PRODUCT_ERROR
} from "../../actions/actionTypes";

export const currentProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_PRODUCT: {
      return {
        ...action.data,
      };
    }
    case GET_CURRENT_PRODUCT_ERROR: {
      console.log(">>> an error to get current  product<<<");
      return state;
    }

    case UPDATE_CURRENT_PRODUCT: {
      console.log(">>> UPDATE REDUCER CURRENT ITEM <<<");
      return {
        ...action.data,
      };
    }
    case UPDATE_CURRENT_PRODUCT_ERROR: {
      console.log(">>> an error to get current  product<<<");
      return state;
    }
    default:
      return state;
  }
}
