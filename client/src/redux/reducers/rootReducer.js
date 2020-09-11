import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './authReducer';
import { tourReducer } from './tourReducer';
import { reviewReducer } from './reviewReducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  tours: tourReducer,
  form: formReducer,
  reviews: reviewReducer
})

