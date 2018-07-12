import React, { Component } from 'react';
import Settings from './components/Settings';
import Login from './components/Login';
import Body from './components/Body';
import SignIn1 from './components/SignIn1';
import SignIn2 from './components/SignIn2';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Settings}/>
        <Route exact path="/main" component={Body}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/signin2/" component={SignIn2}/>
        <Route path="/signin1/:id" component={SignIn1}/>

      </Switch>
    );
  }
}

export default App;
