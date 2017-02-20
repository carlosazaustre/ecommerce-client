import React, { PropTypes } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <section className="container">
      <div className="row">
        {
          products.map(product => (
            <Product
              key={product._id}
              {...product}
            />
          ))
        }
      </div>
    </section>
  );
};

ProductList.defaultProps = {
  products: []
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

export default ProductList;
