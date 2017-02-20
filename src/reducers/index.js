import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as product from './productReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  product
});

export default rootReducer;
