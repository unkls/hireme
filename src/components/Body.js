import React, { Component } from 'react';
import Header from './Header'
import ListJobs from './ListJobs'

class Body extends Component {
  constructor() {
    super()
    this.state = {
      skills: [],
      selectedOption: '',
      data2: '',
      data: null,
      data3: '',

    }
  }

  componentWillMount () {
    const movieItems = [];
    fetch('http://10.5.1.177:3000/v1/jobs', {
      method: 'GET',
      headers: new Headers(),
    }).then(response => {
      if (response.ok) {
        response.json().then(data3 => {
          this.setState({data3 : data3})
        })
      }else {
        console.console.log("Get failed")
      }
    })
  }

  listOfJobs(){
    let table = []
    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      table.push(<ListJobs className=""/>)
    }
    return table
  }

  render(){
    var movieItems = [];
    for (var i=0; i < this.state.data3.length; i++) {
        movieItems.push(<ListJobs uid={this.state.data3[i]['jobId']} />);
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
