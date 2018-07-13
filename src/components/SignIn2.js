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
          star: '',
          data: null,
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      // selectedOption can be null when the `x` (close) button is clicked
      if (selectedOption) {
        console.log(selectedOption);
        var allSkills = this.state.skills
        allSkills.push(selectedOption.label)
        this.setState({ skills : allSkills });
      }
    }

    componentWillMount(){
      (async () => {
        var url = "http://10.5.1.177:3000/v1/skills"
        const rawResponse = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
                });
        const content = await rawResponse.json();
        var options = []
        console.log(content);
        for (var i = 0; i < content.length; i++) {
          options.push({
            label: content[i]['skillName'],
            value: content[i]['skillId']
          })
        }
        this.setState({data : options})
      })();
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

      (async () => {
        var url = "http://10.5.1.177:3000/v1/skills?skillName=" + option
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

    }

    handleStar = (star) => {
      this.setState({star: star});
      console.log(star);
    }

    render() {
      if (this.props.match.params.id == 0) {
        console.log("inscription");
        var message1 = "Vos compétences"
      }else {
        console.log("job");
        var message1 = "Les compétences pour le job"
      }
      var data = [this.state.skills]
      const { selectedOption } = this.state;
        return (
            <div>
                <div className=" text-center" >
                    <form className="form_signin">
                        <p className="Title"> {message1} </p>
                        <div className="col-md">
                            <Select.Creatable
                              id="MOIMOI"
                              name="form-field-name"
                              value={selectedOption}
                              onChange={this.handleChange}
                              onNewOptionClick={this.handleNewOption}
                              options={this.state.data}
                              autosize={false}
                            />
                            <input id="submit_skills"
                                  className="input"
                                  type="textbox"
                                  value="add"
                                  onClick={this.handleKeyPress}
                            />

                            <ListSkills list={data[0]} idJob={this.props.match.params.idJob} idSkills={this.state.selectedOption.value}/>

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
