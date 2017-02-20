import React, { Component } from 'react';

import Header from './common/Header';
import ProductList from './products/ProductList';
import API from './api';

class App extends Component {
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
    console.log(data.products);
    this.setState({
      products: this.state.products.concat(data.products)
    });
  }

  render () {
    return (
      <main role="main">
        <Header />
        <ProductList
          products={this.state.products}
        />
      </main>
    );
  }
}

export default App;
