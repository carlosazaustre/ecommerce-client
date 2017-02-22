import {
  LOAD_CART_ITEMS,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from '../actions/types';
import initialState from './initialState';

export default function cartReducer (state = initialState.cart, action) {
  switch (action.type) {
    case LOAD_CART_ITEMS:
      return {
        ...state,
        items: [...state.items]
      };

    case REMOVE_CART_ITEM:
      const index = state.items.findIndex((elem) => elem._id === action.payload);
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      };

    case ADD_CART_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
}
