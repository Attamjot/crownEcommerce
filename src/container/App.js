import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import Homepage from '../pages/homepage/homepage.component';

const HatsPage = (props) => {
  console.log('hats page props: ', props.match);
  return (
    <div>
      <h1>Hats Page</h1>
      <Link to={`${props.match.url}/1 `}> Topic 1 </Link>
      <Link to={`${props.match.url}/2 `}>Topic 2 </Link>
    </div>
  )
}

const HatsDetail = (props) => {
  console.log('Props', props);
  return (
   <React.Fragment>
    <h1>Hats Details Page { props.match.params.hatsId }</h1>
   </React.Fragment>
  )
}

const PageNotFound = () => (
  <h1>Page Not Found</h1>
);

class App extends Component {
  render() {
    return (
      <div>  
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  exact path="/hats" component={HatsPage} />
          <Route  path="/hats/:hatsId" component={HatsDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
  
}


export default App;
