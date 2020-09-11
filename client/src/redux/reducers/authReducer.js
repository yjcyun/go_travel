import { LOGIN_SUCCESS, LOGIN_FAIL } from "../type/types";

const INITIAL_STATE = {
  isSignedIn: false
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isSignedIn: true,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isSignedIn: false
      }
    default:
      return state;
  }
}