import firebase from 'firebase/app';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

export const signIn = credentials => dispatch => {
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then(() => {
    dispatch({type: LOGIN_SUCCESS})
  }).catch(err => {
    dispatch({type: LOGIN_ERROR, err})
  })
};

export const signOut = credentials => dispatch => {
  firebase.auth().signOut().then(() => {
    dispatch({ type: SIGNOUT_SUCCESS })
  })
};