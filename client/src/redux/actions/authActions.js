import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../type/types';

export const logIn = (formValues) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(formValues);

  try {
    const response = await axios.post('/api/v1/users/login', body, config);
    console.log(response);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data })
  } catch (err) {
    const errors = err.response.data;

    
  }
}