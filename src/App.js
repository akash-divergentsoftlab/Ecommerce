import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';



const HatsPage = () => {
  <div>
    <h1>This is the Hatspage</h1>
  </div>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div >
  );
}

export default App;
