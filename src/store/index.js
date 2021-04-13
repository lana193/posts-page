import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import middleware from './middleware';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware())
  )
);

export default store;