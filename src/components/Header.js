import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">HireMe</a>
          </Navbar.Brand>
        </Navbar.Header>
      <Nav pullRight>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>{' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

    )
  }
}

export default Header
