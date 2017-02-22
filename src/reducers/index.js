import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './productsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  products,
});

export default rootReducer;
