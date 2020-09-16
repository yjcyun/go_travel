import _ from 'lodash';
import { FETCH_TOURS, FETCH_TOUR, CREATE_TOUR, UPDATE_TOUR, DELETE_TOUR } from "../type/types";

export const tourReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TOURS:
      return { ...state, ..._.mapKeys(action.payload.data.data, 'id') }
    case FETCH_TOUR:
      return { ...state, [action.payload.data.data.id]: action.payload.data.data };
    case CREATE_TOUR:
      return { ...state, [action.payload.data.data.id]: action.payload.data.data };
    case UPDATE_TOUR:
      return { ...state, [action.payload.data.doc.id]: action.payload.data.data };
    case DELETE_TOUR:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}