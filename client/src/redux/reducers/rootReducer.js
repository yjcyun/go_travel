import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { tourReducer } from './tourReducer';
import { reviewReducer } from './reviewReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  tours: tourReducer,
  reviews: reviewReducer
})

