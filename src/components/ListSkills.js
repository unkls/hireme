import React, { Component } from 'react';
import '../App.css';
import StarRatingComponent from 'react-star-rating-component';

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
          return
          <li key={listValue}>
          {listValue}
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent
              name="rate1"
              starCount={10}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          </li>;
        })}
      </ul>
    );
  }
}

export default ListSkills;
