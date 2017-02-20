import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import ProductList from './products/ProductList';
import ProductDetail from './products/ProductDetail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductList} />
    <Route path="/detail" component={ProductDetail} />
  </Route>
);
