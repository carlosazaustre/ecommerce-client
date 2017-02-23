import React, { PropTypes } from 'react';
import CartItem from './CartItem';

const CartItemsList = ({ items, onRemoveItem }) => {
  return (
    <div className="list-group">
      {
        items.map((item) => {
          return (
            <CartItem
              key={item._id}
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
  items: PropTypes.arrayOf(PropTypes.object)
};

export default CartItemsList;
