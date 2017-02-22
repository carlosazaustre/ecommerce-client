import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productsActions from '../actions/productsActions';
import ProductDetail from './ProductDetail';

class ProductDetailContainer extends Component {
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

ProductDetailContainer.propTypes = {
  productId: PropTypes.string.isRequired,
  product: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps (state, ownProps) {
  return {
    productId: ownProps.params.productId,
    product: state.activeProduct.product,
    loading: state.activeProduct.loading,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);
