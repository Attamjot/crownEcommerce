import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/header.component';

import Homepage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


const ContactUs = () => (
  <h1>Contact Us</h1>
);

const PageNotFound = () => (
  <h1>Page Not Found</h1>
);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  exact path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
  
}


export default App;
