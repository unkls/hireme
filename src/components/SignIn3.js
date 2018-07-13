import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Signin2 from './SignIn2';
import PropTypes from 'prop-types';
import '../App.css';

var data

class SignIn3 extends Component {

    constructor() {
        super()
        this.state = {
          data: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    componentWillMount() { // before render
    }
    makeURL(){
      var jobName = document.getElementById('input_job_name').value
      var brief = document.getElementById('input_brief').value
      var url = " http://10.5.1.177:3000/v1/recruiters/1/jobs?jobName=" + jobName + "&jobDescription= " + brief
      return url
    }

    handleSubmit() {
      (async () => {
        var url = this.makeURL()
        const rawResponse = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({a: 1, b: 'Textual content'})
        });
        const content = await rawResponse.json();
        console.log(content['jobId']);
        var nextPage = "/signin2/1/" + content['jobId']
        this.props.history.push(nextPage);
      })();

    }

    render() {
        return (
            <div>
              <div id="submit">
                <input type="button" value="oui" onClick={this.handleSubmit}/>
              </div>
              <div id="form1" className="container col-md-6 col-md-2-offset text-center" >
                <form className="form_signin">
                  <p className="Title"> {this.props.message2} </p>
                    <div className="row ">
                      <div className="col-md-12">
                        <label htmlFor="input_job_name" className="form-control">Nom du job </label>
                        <input id="input_job_name" className="input input_long" type="text" />
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-12">
                        <label htmlFor="input_brief" className="form-control"> Description </label>
                        <input id="input_brief" className="input input_big" type="textbox" />
                      </div>
                    </div>
                </form>
            </div>
          </div>
        );
    }
}

SignIn3.propTypes = {
  message1: PropTypes.string,
  message2: PropTypes.string
};

SignIn3.defaultProps = {
  message1: 'Dites nous en plus sur le job',
  message2: 'Une petite description du job ?'
};

export default SignIn3;
