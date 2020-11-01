import {
  RELOAD_PAGE,
  SIGN_IN,
  SIGN_IN_ERROR, SIGN_OUT
} from "./actionTypes";

export const signIn = (user) => {
  return(dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        dispatch({ type: SIGN_IN , user});
      })
      .catch(error => {
        dispatch({
          type: SIGN_IN_ERROR,
          error
        } );
      });
  }

}

export const signUp = () => {

}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT });
      });
  };
}


export const reloadPage = user => ({
  type: RELOAD_PAGE,
  user
})
