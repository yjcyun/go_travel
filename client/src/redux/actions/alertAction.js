import { SET_ALERT, REMOVE_ALERT } from "../type/types";
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (message) => async dispatch => {
  const id = uuidv4();
  dispatch({ type: SET_ALERT, payload: { message, id } });

  setTimeout(() =>
    dispatch({ type: REMOVE_ALERT, payload: id }), 4000
  )
}