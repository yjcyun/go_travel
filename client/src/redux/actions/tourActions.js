import axios from 'axios';
import { FETCH_TOURS } from '../type/types';

// GET ALL TOURS
export const fetchTours = () => async dispatch => {
  const response = await axios.get('/api/v1/tours');
  dispatch({ type: FETCH_TOURS, payload: response.data })
}