import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import * as productsActions from '../actions/productsActions';
import * as cartActions from '../actions/cartActions';

class ProductListContainer extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleOnAddItem = this.handleOnAddItem.bind(this);
  }

  async componentWillMount () {
    await this.props.productsActions.fetchProducts();
  }

  handleOnAddItem (item) {
    this.props.cartActions.addCartItem(item);
  }

  render () {
    return (
      <ProductList
        loading={this.props.loading}
        products={this.props.products}
        onAddItem={this.handleOnAddItem}
      />
    );
  }
}

ProductListContainer.defaultProps = {
  products: []
};

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  productsActions: PropTypes.objectOf(PropTypes.func).isRequired,
  cartActions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps (state) {
  return {
    products: state.productsList.products,
    loading: state.productsList.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    productsActions: bindActionCreators(productsActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
