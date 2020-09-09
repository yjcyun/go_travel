import axios from 'axios';
import { FETCH_TOURS, FETCH_TOUR } from '../type/types';

// GET ALL TOURS
export const fetchTours = () => async dispatch => {
  const response = await axios.get('/api/v1/tours');
  dispatch({ type: FETCH_TOURS, payload: response.data });
}

// GET ONE TOUR
export const fetchTour = id => async dispatch => {
  const response = await axios.get(`/api/v1/tours/${id}`);
  dispatch({ type: FETCH_TOUR, payload: response.data });
}