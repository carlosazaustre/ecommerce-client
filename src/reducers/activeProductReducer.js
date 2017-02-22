import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function activeProductReducer (state = initialState.activeProduct, action) {
  let error;

  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: null,
        loading: false
      };

    case FETCH_PRODUCT_FAILURE:
      // 2nd one is network or server down errors
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        product: null,
        error,
        loading: false
      };

    default:
      return state;
  }
}
