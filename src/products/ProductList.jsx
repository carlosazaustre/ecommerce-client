import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as productActions from '../actions/productActions';
import Product from './Product';

class ProductList extends Component {

  async componentDidMount () {
    await this.props.actions.getAllProducts();
  }

  render () {
    return (
      <section className="container">
        <div className="row">
          {
            this.props.products.map(product => (
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

function mapStateToProps (state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

ProductList.propTypes = {
  products: PropTypes.objectOf(PropTypes.object).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
