import initialState from './initialState';
import {
  LOAD_ALL_PRODUCTS_SUCCESS,
  LOAD_SINGLE_PRODUCT_SUCCESS
} from '../actions/types';

export default function productReducer (state = initialState.products, action) {
  switch (action.type) {
    case LOAD_ALL_PRODUCTS_SUCCESS:
      return action.products;

    case LOAD_SINGLE_PRODUCT_SUCCESS:
      return state;

    default:
      return state;
  }
}
