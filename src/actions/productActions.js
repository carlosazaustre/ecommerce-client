import {
  LOAD_SINGLE_PRODUCT_SUCCESS,
  LOAD_ALL_PRODUCTS_SUCCESS
} from './types';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

import API from '../api';

// Actions Creators
function loadSingleProductSuccess (product) {
  return { type: LOAD_SINGLE_PRODUCT_SUCCESS, product };
}

function loadAllProductsSuccess (products) {
  return { type: LOAD_ALL_PRODUCTS_SUCCESS, products };
}

// Thunks
function getSingleProduct (productId) {
  return async (dispatch) => {
    const data = await API.products.getSingle(productId);
    dispatch(loadSingleProductSuccess(data.product));
  };
}

function getAllProducts () {
  return async (dispatch) => {
    dispatch(beginAjaxCall());
    try {
      const data = await API.products.getAll();
      return dispatch(loadAllProductsSuccess(data.products));
    } catch (err) {
      dispatch(ajaxCallError());
      throw (err);
    }
  };
}

export {
  getSingleProduct,
  getAllProducts
};
