import React, { Component } from 'react';
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
        <nav className="navbar navbar-light bg-faded">
          <h1 className="navbar-brand mb-0">Redux Ecommerce</h1>
        </nav>
        <ProductList
          products={this.state.products}
        />
      </main>
    );
  }
}

export default App;
