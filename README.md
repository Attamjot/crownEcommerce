Create React App Project 
## Technologies Used : 

1. React JS Library
2. Redux ( logger, saga,  )
3. reselect ( For creating memoized selectors for slicing off the state )
4. Firebase 
5. React Router DOM
6. node-sass ( For writing scss in the project )
7. redux-persist ( to persist the state of store, reducer )
     ### made use of { persistStore } in store.js file and passed store to it.
     ### made use of { persistReducer }, { storage } and created one persistConfig object for confirguration and       also exported that.
     ### In Index file , we made use of { PersistGate } which accpets persistor that we created in store.js file.      And its done 
