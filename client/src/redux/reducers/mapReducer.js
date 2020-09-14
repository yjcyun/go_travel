import { COVERT_TO_COORDINATES } from "../type/types";

export const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case COVERT_TO_COORDINATES:
      return { ...state, coordinates: action.payload }
    default:
      return state;
  }
}