import fetch from 'isomorphic-fetch';

const baseURL = 'https://ecommerce-api-a4661.herokuapp.com/api';

const API = {
  products: {
    async getProducts () {
      const response = await fetch(`${baseURL}/products`);
      const data = await response.json();
      return data;
    },
    async getSingle (id = 1) {
      const response = await fetch(`${baseURL}/products/${id}`);
      const data = await response.json();
      return data;
    }
  }
};

export default API;
