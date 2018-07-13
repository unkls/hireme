import React, { Component } from 'react';
import Header from './Header'
import ListJobs from './ListJobs'

class Body extends Component {
  constructor() {
    super()
  }

  listOfJobs(){
    let table = []
    console.log("oui");
    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      table.push(<ListJobs className=""/>)
    }
    return table
  }

  render(){
    const movieItems = [];
    for (var i=0; i < 3; i++) {
        movieItems.push(<ListJobs uid={i} />);
    }
    return (
      <div>
        <Header />
        {movieItems}
      </div>
    )
  }
}

export default Body
