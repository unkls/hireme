import React, { Component } from 'react';
import '../App.css';
import ListSkills from './ListSkills'

class Signin2 extends Component {

    constructor() {
        super();
        this.state = {
          skills: [],
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentWillMount() { // before render
    }

    addSkill(skills) {
      //create a unike key for each new fruit item
      var allSkills = this.state.skills
      allSkills.push(skills)
      this.setState({ skills : allSkills });
    }

    handleKeyPress(e) {
      console.log("oui");
      console.log(e);
      var skill = document.getElementById('select_skills').value
      document.getElementById('select_skills').value = ""
      this.addSkill(skill)
    }

    render() {
      var data = [this.state.skills]
        return (
            <div>
                <div className=" text-center" >
                    <form className="form_signin">
                        <p className="Title"> Vos compétences </p>
                        <div className="col-md">
                            <input id="select_skills"
                              className="input input_big"
                              type="textbox"
                              placeholder="entrer vos compétences"
                            />

                                <input id="submit_skills"
                                  className="input"
                                  type="textbox"
                                  value="add"
                                  onClick={this.handleKeyPress}
                                />

                            <ListSkills list={data[0]}/>

                        </div>

                    </form>
                </div>
                <div className=" text-center">
                    <input value="end" id="submit" type="button" />
                </div>
            </div>
        );
    }
}

export default Signin2;
