import React, { Component } from 'react';
import '../App.css';
import StarRating from './StarRating';

class ListSkills extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
        const { rating } = this.state;
    return (
      <ul>
        {this.props.list.map(function(listValue){
          return(
          <li style={{ fontSize: 25 }} key={listValue}>
            {listValue}
            <StarRating />
          </li>
        )
        })}
      </ul>
    );
  }
}

export default ListSkills;
