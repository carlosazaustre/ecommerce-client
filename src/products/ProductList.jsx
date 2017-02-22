import React, { PropTypes } from 'react';
import Product from './Product';

const ProductList = ({ loading, products }) => {
  return (
    <section className="container">
      { loading && <span>Cargando Datos...</span> }
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

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default ProductList;
