import {
  RELOAD_PAGE,
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_ERROR
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

export const signUp = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        dispatch({ type: SIGN_UP, user });
      })
      .catch(error => {
        dispatch({ type: SIGN_UP_ERROR, error} );
      });
  };
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
