import React from 'react';
import ProductList from './products/ProductList';

const products = [
  {
    id: 1,
    image: 'http://ih0.redbubble.net/image.46620197.2641/ra,unisex_tshirt,x2200,101010:01c5ca27c6,front-c,392,146,750,1000-bg,f8f8f8.u2.jpg',
    name: 'Camiseta Geek #1',
    description: 'Una camiseta bastante Nerdy',
    price: 18,
    deliveryStimate: '1-2 semanas',
    category: 'camisetas'
  },
  {
    id: 2,
    image: 'http://ih0.redbubble.net/image.46620197.2641/ra,unisex_tshirt,x2200,101010:01c5ca27c6,front-c,392,146,750,1000-bg,f8f8f8.u2.jpg',
    name: 'Camiseta Geek #2',
    description: 'Una camiseta bastante Nerdy',
    price: 18,
    deliveryStimate: '1-2 semanas',
    category: 'camisetas'
  },
  {
    id: 3,
    image: 'http://ih0.redbubble.net/image.46620197.2641/ra,unisex_tshirt,x2200,101010:01c5ca27c6,front-c,392,146,750,1000-bg,f8f8f8.u2.jpg',
    name: 'Camiseta Geek #3',
    description: 'Una camiseta bastante Nerdy',
    price: 18,
    deliveryStimate: '1-2 semanas',
    category: 'camisetas'
  }
];

const App = () => {
  return (
    <main role="main">
      <nav className="navbar navbar-light bg-faded">
        <h1 className="navbar-brand mb-0">Redux Ecommerce</h1>
      </nav>
      <ProductList
        products={products}
      />
    </main>
  );
};

export default App;
