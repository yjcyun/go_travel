import _ from 'lodash';
import { FETCH_REVIEWS } from '../type/types';

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      return { ...state, ..._.mapKeys(action.payload.data.data, 'id') }
    default:
      return state;
  }
}