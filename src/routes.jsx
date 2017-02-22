import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import ProductListPage from './products/ProductListPage';
import ProductDetail from './products/ProductDetail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductListPage} />
    <Route path="/detail/:productId" component={ProductDetail} />
  </Route>
);
