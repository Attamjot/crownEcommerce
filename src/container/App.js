import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';

const PageNotFound = () => (
  <h1>Page Not Found</h1>
);

class App extends Component {
  render() {
    return (
      <div>  
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  exact path="/shop" component={ShopPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
  
}


export default App;
