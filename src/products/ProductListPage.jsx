import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import * as productActions from '../actions/productActions';

class ProductListPage extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      loading: true
    };
  }

  async componentWillMount () {
    await this.props.actions.getAllProducts();
    this.setState({
      loading: this.props.loading
    });
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
    products: state.products,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
