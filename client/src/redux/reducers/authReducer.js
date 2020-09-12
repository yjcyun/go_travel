import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  UPDATE_USER_SUCCESS
} from "../type/types";

const INITIAL_STATE = {
  isSignedIn: null,
  token: localStorage.getItem('token'),
  user: null
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload.data.data
      }
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isSignedIn: true,
        user: action.payload.data.data
      }
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOG_OUT:
    case SIGNUP_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isSignedIn: false,
        user: null
      }

    case FORGOT_PASSWORD_SUCCESS:
      return { ...state }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.data.data
      }
    default:
      return state;
  }
}