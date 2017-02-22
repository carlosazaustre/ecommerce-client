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
  },
  cart: {
    items: []
  }
};

export default initialState;
