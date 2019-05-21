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
  DropdownItem,
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    //   this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // }

  render() {
    return (
      <div id="Centerer">
        <Navbar id="NavCSS" expand="md">
          <NavbarBrand href="/">CodeZone</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Users
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Log In</DropdownItem>
                  <DropdownItem>New Users</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
