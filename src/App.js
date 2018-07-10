import React, { Component } from 'react';
import Body from './components/Body';
import Signin2 from './components/SignIn2';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Body}/>
        <Route path="/signin2" component={Signin2}/>

      </Switch>
    );
  }
}

export default App;
