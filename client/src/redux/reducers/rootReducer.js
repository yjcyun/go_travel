import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './authReducer';
import { tourReducer } from './tourReducer';
import { reviewReducer } from './reviewReducer';
import { alertReducer } from './alertReducer';
import { checkoutReducer } from './checkoutReducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  tours: tourReducer,
  form: formReducer,
  reviews: reviewReducer,
  alert: alertReducer,
  pay: checkoutReducer
})

