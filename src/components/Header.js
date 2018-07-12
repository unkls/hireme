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
      dropDown = <DropdownItem> Create job </DropdownItem>
      words = "best students for you"
    }else {
      words = "best jobs for you"
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
                <DropdownItem>
                <Link to='/settings'> Settings </Link>
                </DropdownItem>
                 {dropDown}
                </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
