import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component';


const HatsPage = () => {
  <div>
    <h1>This is the Hatspage</h1>
  </div>
}

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
