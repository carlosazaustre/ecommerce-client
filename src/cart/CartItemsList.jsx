import React, { PropTypes } from 'react';
import uuid from 'uuid';
import CartItem from './CartItem';

const CartItemsList = ({ items, onRemoveItem }) => {
  return (
    <div className="list-group">
      {
        items.map((item) => {
          return (
            <CartItem
              key={uuid.v4()}
              onRemoveItem={onRemoveItem}
              {...item}
            />
          );
        }).reverse()
      }
    </div>
  );
};

CartItemsList.defaultProps = {
  items: []
};

CartItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemoveItem: PropTypes.func.isRequired
};

export default CartItemsList;
