import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOG_OUT, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../type/types';
import { setAuthToken } from '../../utils/setAuthToken';
import history from '../../history';
import { setAlert } from './alertAction';

// LOAD USER
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const response = await axios.get('/api/v1/users/me');
    console.log(response);
    dispatch({ type: USER_LOADED, payload: response.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
}

// LOGS IN USER
export const logIn = (formValues) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify(formValues);

  try {
    const response = await axios.post('/api/v1/users/login', body, config);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch(loadUser());

    history.push('/');
  }
  catch (err) {
    dispatch({ type: LOGIN_FAIL });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message))
  }
}

// LOGS OUT USER
export const logout = () => async dispatch => {
  try {
    const response = await axios.get('/api/v1/users/logout');
    dispatch({ type: LOG_OUT });
    if (response.data.status === 'success') window.location.reload(true);
  }
  catch (err) {
    console.log(err)
  }
}

// REGISTER USER
export const signUp = formValues => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify(formValues);

  try{
    const response = await axios.post('/api/v1/users/signup', body, config);
    console.log(response);
    dispatch({type:SIGNUP_SUCCESS, payload: response.data});
    dispatch(loadUser());

    history.push('/');
  }
  catch(err){
    dispatch({ type: SIGNUP_FAIL });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message))
  }
}