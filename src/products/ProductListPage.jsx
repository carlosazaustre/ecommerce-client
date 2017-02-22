import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import * as productsActions from '../actions/productsActions';

class ProductListPage extends Component {
  constructor (props, context) {
    super(props, context);
  }

  async componentWillMount () {
    await this.props.actions.fetchProducts();
  }

  render () {
    return (
      <ProductList
        loading={this.props.loading}
        products={this.props.products}
      />
    );
  }
}

ProductListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps (state) {
  return {
    products: state.products.productsList.products,
    loading: state.products.productsList.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
