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

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#5F6A8E' }} light expand="md">
          <NavbarBrand
            style={{
              fontWeight: 'bold',
              marginLeft: '20px',
              fontFamily: 'Roboto',
            }}
            href="/"
          >
            Resume 2.0
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="/components/"
                  style={{
                    fontWeight: 'bold',
                    margin: '3px',
                    fontFamily: 'Roboto',
                  }}
                >
                  News
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/"
                  style={{
                    fontWeight: 'bold',
                    margin: '3px',
                    fontFamily: 'Roboto',
                  }}
                >
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  style={{
                    fontWeight: 'bold',
                    margin: '3px',
                    fontFamily: 'Roboto',
                  }}
                >
                  Login
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem style={{ fontFamily: 'Roboto' }}>
                    Create Account
                  </DropdownItem>
                  <DropdownItem style={{ fontFamily: 'Roboto' }}>
                    Login
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
