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
    let dropDown

    if (this.isRecruiter() == true) {
      dropDown =               <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Best jobs for you
                        </DropdownItem>
                        <DropdownItem>
                          Settings
                        </DropdownItem>
                        <DropdownItem>
                          Create job if recruiter
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
    } else {
      dropDown =               <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Best jobs for you
                        </DropdownItem>
                        <DropdownItem>
                          Settings
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
    }

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
              </NavItem>
              {dropDown}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
