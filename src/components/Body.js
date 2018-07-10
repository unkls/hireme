import React, { Component } from 'react';
import Header from './Header'
import ListJobs from './ListJobs'

class Body extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div>
        <Header />
        <ListJobs />
      </div>
    )
  }
}

export default Body
