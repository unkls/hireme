import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Signin2 from './SignIn2';
import PropTypes from 'prop-types';
import '../App.css';

class SignIn3 extends Component {

    constructor() {
        super()
    }


    componentWillMount() { // before render
    }

    handleSubmit() {
    }

    render() {
        return (
            <div>
                <div id="submit">
                  <Link to='/signin2'> Next </Link>
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
                            <div className="col-md-6">
                                <label htmlFor="input_mobile" className="form-control"> Mobil </label>
                                <input id="input_mobile" className="input input_short" type="text" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="input_landline" className="form-control"> Landline </label>
                                <input id="input_landline" className="input input_short" type="text" />
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-md-12">
                                <label htmlFor="input_address" className="form-control">Address </label>
                                <input id="input_address" className="input input_long" type="text" />
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

SignIn3.propTypes = {
  message1: PropTypes.string,
  message2: PropTypes.string
};

SignIn3.defaultProps = {
  message1: 'Dites nous en plus sur le job',
  message2: 'Une petite description du job ?'
};

export default SignIn3;
