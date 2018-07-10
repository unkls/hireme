import React, { Component } from 'react';
import SignIn1 from './components/SignIn1';
import Signin2 from './components/SignIn2';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SignIn1}/>
        <Route path="/signin2" component={Signin2}/>

      </Switch>
    );
  }
}

export default App;
