import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './productReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  products,
  ajaxCallsInProgress
});

export default rootReducer;
