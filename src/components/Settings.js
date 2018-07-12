import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SignIn1 from './SignIn1';
import '../index.css';


class Settings extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <SignIn1 message1="Changer vos informations" message2="Changer votre Description" />
    )
  }
}

export default Settings
