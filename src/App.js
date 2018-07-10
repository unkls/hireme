import React, { Component } from 'react';
<<<<<<< HEAD
import Body from './components/Body';
=======
import SignIn1 from './components/SignIn1';
>>>>>>> feature/submit_form
import Signin2 from './components/SignIn2';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Body}/>
=======
        <Route exact path="/" component={SignIn1}/>
>>>>>>> feature/submit_form
        <Route path="/signin2" component={Signin2}/>

      </Switch>
    );
  }
}

export default App;
