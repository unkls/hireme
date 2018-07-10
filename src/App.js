import React, { Component } from 'react';
import Login from './components/Login';
import Signin2 from './components/SignIn2';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signin2" component={Signin2}/>

      </Switch>
    );
  }
}

export default App;
