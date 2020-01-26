import {LOGIN_ERROR, LOGIN_SUCCESS, SIGNOUT_SUCCESS} from "../actions/authActions";

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('login success');
      return {
        ...state,
        authError: null,
      };

    case LOGIN_ERROR:
      console.log('login error');
      return {
        ...state,
        authError: 'Login Failed'
      };

    case SIGNOUT_SUCCESS:
      console.log('sign-out success ');
      return state;
    default:
      return state
  }
};

export default authReducer;
