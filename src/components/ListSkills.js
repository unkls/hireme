import React, { Component } from 'react';
import '../App.css';
import StarRating from './StarRating';

class ListSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      star : ''
    };
    this.handleStar = this.handleStar.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  handleStar(star) {
     this.setState({val: star});
   }

  render() {
    var idSkill = this.props.idSkills;
    const { rating } = this.state;
    var num = 1
    var idJob = this.props.idJob
    return (
      <ul>
        {this.props.list.map(function(listValue){
          return(
          <li style={{ fontSize: 25 }} key={listValue}>
            {listValue}
            <StarRating onSelectStar={num} idJob={idJob} idSkill={idSkill}/>
          </li>
        )
        })}
      </ul>
    );
  }
}

export default ListSkills;
