import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/header.component';

import Homepage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from '../firebase/firebase.utils';


const ContactUs = () => (
  <h1>Contact Us</h1>
);

const PageNotFound = () => (
  <h1>Page Not Found</h1>
);

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      currentUser: null
    };

  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      //console.log('user:', user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={ currentUser }/>
        {
          currentUser ? (<h1 style={{ textAlign:'center', backgroundColor: '#ddd' }}>Logged In as : {currentUser.displayName}</h1>) : null
        }
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
