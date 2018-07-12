import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Signin2 from './SignIn2';
import PropTypes from 'prop-types';
import '../App.css';

class SignIn1 extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    componentWillMount() { // before render
    }

    makeURL(){
      var firstName = document.getElementById('input_firstName').value
      var lastName = document.getElementById('input_lastName').value
      var mail = document.getElementById('input_email').value
      var phone = document.getElementById('input_mobile').value
      var password = document.getElementById('input_password').value
      var brief = document.getElementById('input_brief').value

      var typeUser = this.props.match.params.id
      if (typeUser == 0) {
        var url = "http://10.5.1.177:3000/v1/candidates?lastname=" + lastName + "&firstname=" + firstName + "&phone=" + phone +  "&mail=" + mail + "&password=" + password + "&description=" + brief
      }else {
        var company = document.getElementById('input_company').value
        var url = "http://10.5.1.177:3000/v1/recruiters?lastname=" + lastName + "&firstname=" + firstName + "&phone=" + phone + "&mail=" + mail + "&password=" + password + "&description=" + brief + "&company=" + company
      }

      return url
    }

    handleSubmit() {
      fetch("")
      .then(function(data) {
        // Here you get the data to modify as you please
        })
      .catch(function(error) {
        // If there is any error you will catch them here
      });

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

        console.log(content);
      })();
      this.props.history.push("/signin2");
    }

    render() {
      var typeUser = this.props.match.params.id
      if (typeUser == 0) {
        var more = ""
      }else {
        console.log("recruit");
        var more =  <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="input_company" className="form-control"> Company </label>
                        <input id="input_company" className="input input_short" type="text" />
                      </div>
                    </div>
      }
        return (
            <div>
                <div id="submit">
                <input type="button" value="oui" onClick={this.handleSubmit}/>
                </div>
                <div id="form1" className="container col-md-6 col-md-2-offset text-center" >
                    <form className="form_signin">
                        <p className="Title"> {this.props.message1} </p>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="input_firstName" className="form-control"> First Name</label>
                                <input id="input_firstName" className="input input_short" type="text" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="input_lastName" className="form-control"> Last Name </label>
                                <input id="input_lastName" className="input input_short" type="text" />
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-md-12">
                                <label htmlFor="input_email" className="form-control">Email </label>
                                <input id="input_email" className="input input_long" type="text" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="input_mobile" className="form-control"> Mobil </label>
                                <input id="input_mobile" className="input input_short" type="text" />
                            </div>
                        </div>

                        {more}

                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="input_password" className="form-control"> Password </label>
                                <input id="input_password" className="input input_short" type="text" />
                            </div>
                        </div>

                        <p className="Title"> {this.props.message2} </p>

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

SignIn1.propTypes = {
  message1: PropTypes.string,
  message2: PropTypes.string
};

SignIn1.defaultProps = {
  message1: 'Dites nous en plus sur vous',
  message2: 'Une petite description ?'
};

export default SignIn1;
