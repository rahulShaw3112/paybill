import React from 'react';
import './App.css';

import Nav from './navbar/nav'; // Import a component from another file
import Product from './product/product';

function App() {
  return (
    <div>
       <Nav />
       <Product />
    </div>
  );
}

export default App;
