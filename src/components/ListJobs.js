import React, { Component } from 'react';
import Header from './Header'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ListJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      data1: '',
      dataSkills: "",
    }

    this.openModal = this.openModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
  }

  componentWillMount() {
    var url = "http://10.5.1.177:3000/v1/jobs/" + this.props.uid +"?recruiters"
    fetch( url , {
      method: 'GET',
      headers: new Headers(),
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({data1 : data})
        })
      }else {
        console.console.log("Get failed")
      }
    })

    url = "http://10.5.1.177:3000/v1/jobs/" + this.props.uid + "?skills"
    fetch( url , {
      method: 'GET',
      headers: new Headers(),
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({dataSkills : data})
        })
      }else {
        console.console.log("Get failed")
      }
    })


  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  openModal2() {
    this.setState({modalIsOpen2: true});
  }

afterOpenModal() {
  // references are now sync'd and can be accessed.
}

closeModal() {
  this.setState({modalIsOpen: false});
}

closeModal2() {
  this.setState({modalIsOpen2: false});
}

  render(){
    var company = ""
    var job = ""
    var jobBrief = ""
    var emailRecrut = ""
    var stringSkills = ""
    var skills = []

    if (this.state.data1.hasOwnProperty('Recruiter')) {
        if (this.state.data1.Recruiter.hasOwnProperty('User')) {
          company = this.state.data1.Recruiter.company
          job = this.state.data1.jobName
          jobBrief = this.state.data1.jobDescription
          emailRecrut = this.state.data1.Recruiter.User.mail
        }
    }
      if (this.state.dataSkills.hasOwnProperty('Skills')) {
        for (var i = 0; i < this.state.dataSkills.Skills.length; i++) {
          skills.push(this.state.dataSkills.Skills[i].skillName)
          if (this.state.dataSkills.Skills[i].hasOwnProperty('JobSkill')) {
            skills.push(this.state.dataSkills.Skills[i].JobSkill.LevelLevelId)
            console.log(skills);
          }
        }

        for (var i = 0; i < skills.length; i++) {
          stringSkills = stringSkills + " --- " +skills[i]
        }
      }
    return (
    <div class="row">
      <div id="container_jobs" class="col-md-7 col-md-offset-3">
      <button id="modal_company" onClick={this.openModal2}> {company}</button>
        <p id="information_jobs"> {job} </p>
        <p id="pourcentage" > Pourcentage </p>
        <p> {jobBrief} </p>
        <p> {stringSkills} </p>
        <button id="button_modal" onClick={this.openModal}> Candidate ! </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p>You can contact : {company}  </p>
          <p>AT {emailRecrut}</p>
          <button onClick={this.closeModal}>close</button>
        </Modal>

        <Modal
          id="modal_company"
          isOpen={this.state.modalIsOpen2}
          onRequestClose={this.closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p> {this.props.uid} </p>
          <button onClick={this.closeModal2}>close</button>
        </Modal>

      </div>
    </div>


    )
  }
}

export default ListJobs
