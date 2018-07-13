import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    
    (async () => {
      var url = "http://10.5.1.177:3000/v1/job-skills?levelId=" + nextValue + "&jobId=" + this.props.idJob + "&skillId=" + this.props.idSkill
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
      });
      const content = await rawResponse.json();
      var nextPage = "/signin2/1/" + content['jobId']
    })();
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={4}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default StarRating
