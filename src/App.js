import React, { Component } from 'react';

import Header from './components/header/header'
import ProductList from './components/productList/productList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
         <Header />
         <ProductList />
      </div>
    );
  }
}

export default App;
