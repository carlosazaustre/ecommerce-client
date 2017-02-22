import React, { PropTypes } from 'react';

const ProductDetail = ({ product }) => {
  const { image, name, description, price, deliveryStimate, category } = product;

  return (
    <div className="row">
      <figure className="figure col-lg-6">
        <img className="figure-img img-thumbnail rounded" src={image} alt={name} />
      </figure>
      <div className="col-lg-6">
        <br />
        <h4>{name}</h4>
        <p>{description}</p>
        <ul className="list-group">
          <li className="list-group-item">Precio:<strong> {price} &euro;</strong></li>
          <li className="list-group-item">Entrega:<strong> {deliveryStimate}</strong></li>
          <li className="list-group-item">Categoría: <span className="badge badge-pill badge-info"> {category}</span></li>
        </ul>
        <br />
        <button className="btn btn-primary">
          <span className="fa fa-shopping-cart" /> Añadir al carrito
        </button>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetail;
