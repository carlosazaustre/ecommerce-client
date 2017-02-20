import React, { Component } from 'react';
import Product from './Product';
import API from '../api';

class ProductList extends Component {
  constructor () {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount () {
    this.initialFetch();
  }

  async initialFetch () {
    const data = await API.products.getProducts();
    this.setState({
      products: this.state.products.concat(data.products)
    });
  }

  render () {
    return (
      <section className="container">
        <div className="row">
          {
            this.state.products.map(product => (
              <Product
                key={product._id}
                {...product}
              />
            ))
          }
        </div>
      </section>
    );
  }
}

export default ProductList;
