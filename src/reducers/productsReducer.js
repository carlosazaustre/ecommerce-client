import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  RESET_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  RESET_ACTIVE_PRODUCT
} from '../actions/types';

const initialState = {
  productsList: {
    products: [],
    error: null,
    loading: false
  },
  activeProduct: {
    product: null,
    error: null,
    loading: false
  }
};

export default function productsReducer (state = initialState, action) {
  let error;

  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: // Return the product list, loading = false
      return {
        ...state,
        productsList: { products: action.payload, error: null, loading: false }
      };

    case FETCH_PRODUCTS_FAILURE: // Return an error
      error = action.payload || { message: action.payload.message }; // 2nd one is network or server down errors
      return {
        ...state,
        productsList: { products: [], error, loading: false }
      };

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        activeProduct: { product: action.payload, error: null, loading: false }
      };

    case FETCH_PRODUCT_FAILURE:
      error = action.payload || { message: action.payload.message }; // 2nd one is network or server down errors
      return {
        ...state,
        activeProduct: { product: null, error, loading: false }
      };

    default:
      return state;
  }
}
