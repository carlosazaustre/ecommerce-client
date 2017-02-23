import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import ProductAddContainer from './products/ProductAddContainer';
import ProductListContainer from './products/ProductListContainer';
import ProductDetailContainer from './products/ProductDetailContainer';
import CartContainer from './cart/CartContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductListContainer} />
    <Route path="/add" component={ProductAddContainer} />
    <Route path="/detail/:productId" component={ProductDetailContainer} />
    <Route path="/cart" component={CartContainer} />
  </Route>
);
