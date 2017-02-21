import {
  LOAD_SINGLE_PRODUCT,
  LOAD_ALL_PRODUCTS
} from './types';

import API from '../api';

function loadSingleProduct (product) {
  return {
    type: LOAD_SINGLE_PRODUCT,
    product
  };
}

function loadAllProducts (products) {
  return {
    type: LOAD_ALL_PRODUCTS,
    products
  };
}

function getSingleProduct (productId) {
  return async (dispatch) => {
    const data = await API.products.getSingle(productId);
    dispatch(loadSingleProduct(data.product));
  };
}

function getAllProducts () {
  return async (dispatch) => {
    const data = await API.products.getAll();
    dispatch(loadAllProducts(data.products));
  };
}

export {
  getSingleProduct,
  getAllProducts
};
