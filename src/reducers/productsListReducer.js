import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function productsListReducer (state = initialState.productsList, action) {
  let error;

  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: // Return the product list, loading = false
      return {
        ...state,
        products: action.payload,
        error: null,
        loading: false
      };

    case FETCH_PRODUCTS_FAILURE: { // Return an error
      // 2nd one is network or server down errors
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        products: [],
        error,
        loading: false
      };
    }

    case SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        error: null,
        loading: false
      }

    case SAVE_PRODUCT_FAILURE:
      // 2nd one is network or server down errors
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        error,
        loading: false
      }

    default:
      return state;
  }
}
