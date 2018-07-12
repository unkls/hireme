import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
  DropdownItem } from 'reactstrap';
  import Select from 'react-select';
  import { Link } from 'react-router-dom';


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  isRecruiter(){
    return true
  }

  render() {
    var dropDown = ""
    var words = ""
    if (this.isRecruiter() == true) {
      var dropDownCreateJobs = <DropdownItem> Create job </DropdownItem>
      var droptDownSettings = <DropdownItem href="/signin1/1"><p> Settings </p> </DropdownItem>
      words = "best students for you"
    }else {
      words = "best jobs for you"
      var droptDownSettings = <DropdownItem href="/signin1/0"><p> Settings </p> </DropdownItem>
    }

    return (
      <div>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/main">HireMe</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Select
                  name="form-field-name"
                  onChange={this.handleChange}
                  onNewOptionClick={this.handleNewOption}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                  autosize={false}
                />
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                  {words}
                </DropdownItem>
                 {dropDown}
                 {dropDownCreateJobs}
                 {droptDownSettings}
                </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
