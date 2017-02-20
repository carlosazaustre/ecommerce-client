import React, { PropTypes } from 'react';

const Product = ({ name, description, image, price, deliveryStimate, category }) => {
  return (
    <div className="card col-xs-12 col-sm-6 col-lg-4">
      <img className="card-img-top" height="450" src={image} alt={name} />
      <div className="card-block">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>{price} &euro;</strong></li>
        <li className="list-group-item"><strong>Entrega:</strong> {deliveryStimate}</li>
        <li className="list-group-item"><span className="badge badge-pill badge-info">{category}</span></li>
      </ul>
      <div className="card-block">
        <a className="btn btn-primary" href="#">Añadir al carrito</a>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deliveryStimate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Product;