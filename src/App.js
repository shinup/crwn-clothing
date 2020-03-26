import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { Route, Switch} from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1> Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
      <Route exact component={HomePage} path='/' />    
      <Route component={ShopPage} path='/shop' />   
    </Switch>
    </div>
  );
}

export default App;
