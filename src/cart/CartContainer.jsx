import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../actions/cartActions';
import CartItemsList from './CartItemsList';

class CartContainer extends Component {
  constructor (props) {
    super(props);

    this.handleOnRemoveItem = this.handleOnRemoveItem.bind(this);
  }

  componentWillMount () {
    this.props.actions.loadCartItems();
  }

  handleOnRemoveItem (itemId) {
    this.props.actions.removeCartItem(itemId);
  }

  render () {
    return (
      <CartItemsList
        items={this.props.items}
        onRemoveItem={this.handleOnRemoveItem}
      />
    );
  }
}

CartContainer.defaultProps = {
  items: []
};

CartContainer.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps (state) {
  return {
    items: state.cart.items
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
