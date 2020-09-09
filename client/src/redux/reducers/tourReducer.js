import { FETCH_TOURS } from "../type/types";

export const tourReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOURS:
      return action.payload.data.data
    default:
      return state;
  }
}