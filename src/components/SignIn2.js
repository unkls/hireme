import React, { Component } from 'react';
import '../App.css';
import ListSkills from './ListSkills'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Signin2 extends Component {

    constructor() {
        super();
        this.state = {
          skills: [],
          selectedOption: '',
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      // selectedOption can be null when the `x` (close) button is clicked
      if (selectedOption) {
        console.log(`Selected: ${selectedOption.label}`);
        var allSkills = this.state.skills
        allSkills.push(selectedOption.label)
        this.setState({ skills : allSkills });
      }
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

    handleNewOption(option){
      console.log("New option");
      //send this option to API
    }

    render() {
      var data = [this.state.skills]
      const { selectedOption } = this.state;
        return (
            <div>
                <div className=" text-center" >
                    <form className="form_signin">
                        <p className="Title"> Vos compétences </p>
                        <div className="col-md">
                            <Select.Creatable
                              id="MOIMOI"
                              name="form-field-name"
                              value={selectedOption}
                              onChange={this.handleChange}
                              onNewOptionClick={this.handleNewOption}
                              options={[
                                { value: 'one', label: 'One' },
                                { value: 'two', label: 'Two' },
                              ]}
                              autosize={false}
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
                    <Link id="submit" to='/main'> END </Link>

                </div>
            </div>
        );
    }
}

export default Signin2;
