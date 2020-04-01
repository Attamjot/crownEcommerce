# Ecommerce Project

__Technologies Used:__ 

1. React JS Library ([Visit](https://reactjs.org/ "React JS"))
2. Redux Logger ( Redux logging tool - Logs all the actions that your dispatch with previous state , logged action                   then next state ) [Visit](https://github.com/LogRocket/redux-logger "Redux Logger")
3. redux-persist ( Persist and rehydrate a redux store. ) [Visit](https://github.com/rt2zz/redux-persist)
4. reselect ( For creating memoized selectors for slicing off the state ) [Visit](https://github.com/reduxjs/reselect)
5. Firebase [Visit](https://firebase.google.com/)
6. React Router DOM [Visit](https://reacttraining.com/react-router/web/guides/quick-start)
7. node-sass ( For writing scss in the project ) [Visit](https://github.com/sass/node-sass)

__Library Usage__

* How to use `Redux Logger: `
```javascript
  ` store.js file `
  import { createStore, applyMiddleware } from 'redux';
  import { logger } from 'redux-logger';
  
  const middlewares = [logger];

  export const store = createStore(rootReducer, applyMiddleware(...middlewares));
```
   **and we are done , now everytime we dispatch actions , it will be logged and you can see in the console of developer tools**

* How to use `reselect: `
```javascript
  `cart.selectors.js`
    import { createSelector } from 'reselect';

    // Input slector ( it does not use createSelector )
    export const selectCart = state => state.cart;

    // output selectors , that expects input selector's as an input
    export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
    );

    export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems
                     .reduce((accumulatedQuantity, cartItem) => 
                                                accumulatedQuantity + cartItem.quantity, 0);
```
