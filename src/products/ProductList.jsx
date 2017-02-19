import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <section className="container">
      <div className="row">
        {
          products.map(product => (
            <Product
              key={product.id}
              {...product}
            />
          ))
        }
      </div>
    </section>
  );
};

export default ProductList;
