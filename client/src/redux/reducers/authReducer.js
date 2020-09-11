import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FORGOT_PASSWORD_SUCCESS
} from "../type/types";

const INITIAL_STATE = {
  isSignedIn: null,
  token: localStorage.getItem('token')
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isSignedIn: true
      }
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isSignedIn: true,
      }
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOG_OUT:
    case SIGNUP_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isSignedIn: false
      }

    case FORGOT_PASSWORD_SUCCESS:
      return { ...state }
    default:
      return state;
  }
}