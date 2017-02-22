import API from '../api';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  RESET_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  RESET_ACTIVE_PRODUCT
} from './types';

// Actions Creators
export function fetchProductsSuccess (products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
}

export function fetchProductsFailure (error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
}

export function fetchProducts () {
  return async (dispatch) => {
    try {
      const data = await API.products.getAll();
      return dispatch(fetchProductsSuccess(data.products));
    } catch (error) {
      return dispatch(fetchProductsFailure(error));
    }
  };
}

export function resetProducts () {
  return { type: RESET_PRODUCTS };
}

export function resetActiveProduct () {
  return { type: RESET_ACTIVE_PRODUCT };
}
