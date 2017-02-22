import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productsList from './productsListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  productsList,
  activeProduct,
  cart
});

export default rootReducer;
