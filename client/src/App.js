import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkoutpage.component'

import{ auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser} from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

const App= ({setCurrentUser}) => {
  useEffect(() => {   

    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot =>{
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()            
          });       
        });
        
      }
      setCurrentUser(userAuth);
     });

     return function cleanup() {
      unsubscribeFromAuth();
    };
  },[setCurrentUser]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact component={HomePage} path='/' />    
        <Route component={ShopPage} path='/shop' /> 
        <Route exact component={CheckoutPage} path='/checkout' /> 
        <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />   
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
