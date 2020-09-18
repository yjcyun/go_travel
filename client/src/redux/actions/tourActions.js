import axios from 'axios';
import { FETCH_TOURS, FETCH_TOUR, CREATE_TOUR, UPDATE_TOUR, DELETE_TOUR } from '../type/types';
import history from '../../history';

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
  try {
    const formData = new FormData();
    if (formValues.name) formData.append('name', formValues.name);
    if (formValues.summary) formData.append('summary', formValues.summary);
    if (formValues.description) formData.append('description', formValues.description);
    if (formValues.difficulty) formData.append('difficulty', formValues.difficulty);
    if (formValues.price) formData.append('price', formValues.price);
    if (formValues.maxGroupSize) formData.append('maxGroupSize', formValues.maxGroupSize);
    if (formValues.duration) formData.append('duration', formValues.duration);
    if (formValues.startLocation) formData.append('startLocation', formValues.startLocation);

    if (formValues.startDates) formData.append('startDates', formValues.startDates);

    // IMAGES
    if (formValues.imageCover) formData.append('imageCover', formValues.imageCover[0]);
    if (formValues.image1) formData.append('image1', formValues.image1[0]);
    if (formValues.image2) formData.append('image2', formValues.image2[0]);
    if (formValues.image3) formData.append('image3', formValues.image3[0]);

    // for (var pair of formData.entries()) {
    //   console.log('frontend', pair[0] + ' - ' + pair[1]);
    // }

    const response = await axios.post('/api/v1/tours', formData);
    dispatch({ type: CREATE_TOUR, payload: response.data });
    //FIXME: BUG ALERT !!! PAGE RELOADS AFTER DISPATCH - code does not run after line 43. Problem in tourController?
    history.push('/admin/tours');

  } catch (err) {
    console.log(err)
  }
}

// UPDATE TOUR
export const updateTour = (id, formValues) => async dispatch => {
  const formData = new FormData();
  if (formValues.name) formData.append('name', formValues.name);
  if (formValues.summary) formData.append('summary', formValues.summary);
  if (formValues.description) formData.append('description', formValues.description);
  if (formValues.difficulty) formData.append('difficulty', formValues.difficulty);
  if (formValues.price) formData.append('price', formValues.price);
  if (formValues.maxGroupSize) formData.append('maxGroupSize', formValues.maxGroupSize);
  if (formValues.duration) formData.append('duration', formValues.duration);

  if (formValues.startLocation) formData.append('startLocation', formValues.startLocation);
  if (formValues.startDates) formData.append('startDates', formValues.startDates);

  if (formValues.imageCover) formData.append('imageCover', formValues.imageCover[0]);
  if (formValues.image1) formData.append('image1', formValues.image1[0]);
  if (formValues.image2) formData.append('image2', formValues.image2[0]);
  if (formValues.image3) formData.append('image3', formValues.image3[0]);


  const response = await axios.patch(`/api/v1/tours/${id}`, formData);
  dispatch({ type: UPDATE_TOUR, payload: response.data });
  history.push('/admin/tours')
}

// DELETE TOUR
export const deleteTour = id => async dispatch => {
  await axios.delete(`/api/v1/tours/${id}`);
  dispatch({ type: DELETE_TOUR, payload: id });
  history.push('/admin/tours')
}
