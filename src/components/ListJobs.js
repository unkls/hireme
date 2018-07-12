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
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
  this.setState({modalIsOpen: true});
}

afterOpenModal() {
  // references are now sync'd and can be accessed.
}

closeModal() {
  this.setState({modalIsOpen: false});
}

  render(){
    return (
    <div class="row">
      <div id="container_jobs" class="col-md-7 col-md-offset-3">
        <p id="information_jobs"> Nom entreprise - Nom Job </p>
        <p id="pourcentage" > Pourcentage </p>
        <p> Description job </p>
        <p> List Skills </p>
        <button id="button_modal" onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p>You can contact : NOM ENTREPRISE</p>
          <p>AT @</p>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    </div>


    )
  }
}

export default ListJobs
