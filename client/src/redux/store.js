import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';

export const store = createStore(
  rootReducer, applyMiddleware(reduxThunk)
);
