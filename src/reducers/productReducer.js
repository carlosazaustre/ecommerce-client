import initialState from './initialState';

export default function productReducer (state = initialState.products, action) {
  switch (action.type) {
    default:
      return state;
  }
}
