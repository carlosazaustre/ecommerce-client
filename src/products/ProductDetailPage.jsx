import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productsActions from '../actions/productsActions';
import ProductDetail from './ProductDetail';

class ProductDetailPage extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      loading: true
    };
  }

  async componentWillMount () {
    const { actions, params } = this.props;
    debugger;
    await actions.getSingleProduct(params.productId);
  }

  render () {
    return (
      <div>
        { this.state.loading && <span>Cargando Datos...</span> }
        { this.state.loading || <ProductDetail product={this.props.product}/> }
      </div>
    );
  }
}

ProductDetailPage.propTypes = {
  product: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {
    product: state.products
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
