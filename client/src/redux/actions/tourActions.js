import axios from 'axios';
import { FETCH_TOURS, FETCH_TOUR, CREATE_TOUR, UPDATE_TOUR, DELETE_TOUR } from '../type/types';

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

// CREATE TOUR
export const createTour = (formValues) => async (dispatch) => {
  const response = await axios.post(`/api/v1/tours`, { ...formValues });
  dispatch({ type: CREATE_TOUR, payload: response.data });
}

// UPDATE TOUR
export const updateTour = (id, formValues) => async dispatch => {
  const response = await axios.post(`/api/v1/tours/${id}`, formValues);
  dispatch({ type: UPDATE_TOUR, payload: response.data });
}

// DELETE TOUR
export const deleteTour = id => async dispatch => {
  await axios.delete(`/api/v1/tours/${id}`);
  dispatch({ type: DELETE_TOUR, payload: id });
}