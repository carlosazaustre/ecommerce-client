import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productsActions from '../actions/productsActions';
import * as cartActions from '../actions/cartActions';
import ProductDetail from './ProductDetail';

class ProductDetailContainer extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleOnAddItem = this.handleOnAddItem.bind(this);
  }

  async componentWillMount () {
    await this.props.productsActions.fetchProduct(this.props.productId);
  }

  handleOnAddItem (item) {
    this.props.cartActions.addCartItem(item);
  }

  render () {
    return (
      <ProductDetail
        loading={this.props.loading}
        product={this.props.product}
        onAddItem={this.handleOnAddItem}
      />
    );
  }
}

ProductDetailContainer.propTypes = {
  productId: PropTypes.string.isRequired,
  product: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  onAddItem: PropTypes.func.isRequired,
  productsActions: PropTypes.objectOf(PropTypes.func).isRequired,
  cartActions: PropTypes.objectOf(PropTypes.func).isRequired,
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
    productsActions: bindActionCreators(productsActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);
