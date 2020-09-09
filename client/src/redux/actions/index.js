import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/v1/users/me');

  dispatch({ type: FETCH_USER, payload: response.data })
}