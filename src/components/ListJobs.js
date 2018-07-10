import React, { Component } from 'react';
import Header from './Header'
import '../App.css';

class ListJobs extends Component {
  constructor() {
    super()
  }

  render(){
    return (
    <div class="row">
      <div id="container_jobs" class="col-md-7 col-md-offset-3">
        <p id="information_jobs"> Nom entreprise - Nom Job </p>
        <p id="pourcentage" > Pourcentage </p>
        <p> Description job </p>
        <p> List Skills </p>
      </div>
    </div>


    )
  }
}

export default ListJobs
