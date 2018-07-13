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
      modalIsOpen2: false
    };

    this.openModal = this.openModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    console.log(this.props);
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
    return (
    <div class="row">
      <div id="container_jobs" class="col-md-7 col-md-offset-3">
      <button id="modal_company" onClick={this.openModal2}> nom entreprise</button>
        <p id="information_jobs"> Nom Job </p>
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
