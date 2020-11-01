import {
  RELOAD_PAGE,
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_ERROR
} from "../../actions/actionTypes";
import storage from "../../utils/storage";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      storage.set('user', action.user)
      return {
        user: action.user
      };
    case SIGN_IN_ERROR:
      return {
        error: action.error
      };
    case SIGN_UP:
      return state;
    case SIGN_UP_ERROR:
      return state;
    case SIGN_OUT:
      storage.remove('user')
      return {
        user: null
      };
    case RELOAD_PAGE:
      return {
        user: action.user
      };
    default:
      return state;
  }
}
