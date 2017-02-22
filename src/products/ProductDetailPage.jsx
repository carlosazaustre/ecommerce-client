import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productsActions from '../actions/productsActions';
import ProductDetail from './ProductDetail';

class ProductDetailPage extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      loading: true
    };
  }

  async componentWillMount () {
    await this.props.actions.fetchProduct(this.props.productId);
  }

  render () {
    return (
      <ProductDetail
        loading={this.props.loading}
        product={this.props.product}
      />
    );
  }
}

ProductDetailPage.propTypes = {
  productId: PropTypes.string.isRequired,
  product: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps (state, ownProps) {
  return {
    productId: ownProps.params.productId,
    product: state.products.activeProduct.product,
    loading: state.products.activeProduct.loading,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
