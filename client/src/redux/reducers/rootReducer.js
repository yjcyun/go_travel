import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { tourReducer } from './tourReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  tours: tourReducer
})

