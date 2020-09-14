import {STRIPE_CHECKOUT} from "../type/types";

export const checkoutReducer = (state = {}, action) => {
  switch (action.type) {
    case STRIPE_CHECKOUT:
      return {
        ...state,
        payment: action.payload.data.data
      }
    default:
      return state;
  }
}