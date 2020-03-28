import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header/header.component';

import Homepage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';

const ContactUs = () => (
  <h1>Contact Us</h1>
);

const PageNotFound = () => (
  <h1>Page Not Found</h1>
);

class App extends Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser }  = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        // storing data in firestore ## function exists in firebase.utils.js
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
          //console.log('inside State', this.state);
        });
      }

      // equivalent of saying currentUser = null;
      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header/>
        {
          currentUser ? (<h1 style={{ textAlign:'center', backgroundColor: '#ddd' }}>Logged In as : {currentUser.displayName}</h1>) : null
        }
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/contact" component={ContactUs} />
          <Route exact path="/signin" render = {() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
  
}

// lets destructure our state to get user from state object
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
