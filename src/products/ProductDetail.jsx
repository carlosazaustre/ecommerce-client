import React, { Component } from 'react';
import API from '../api';

class ProductDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount () {
    this.initialFetch();
  }

  async initialFetch () {
    const data = await API.products.getSingle(this.props.params.productId);
    console.log(data);
    this.setState({
      product: data.product
    });
  }

  render () {
    if (this.state.product) {
      const { image, name, description, price, deliveryStimate, category } = this.state.product;

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
    }

    return (
      <div>
        No hay nada
      </div>
    );
  }
}

export default ProductDetail;
