import { FETCH_TOURS, FETCH_TOUR } from "../type/types";

export const tourReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOURS:
      return action.payload.data.data;
    case FETCH_TOUR:
      return action.payload.data.data;
    default:
      return state;
  }
}