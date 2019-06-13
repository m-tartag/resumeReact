import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

export default class Navigation extends React.Component {
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
        <Navbar id="NavCSS" color="dark" light expand="md">
          <NavbarBrand id="NavbarBrand" href="/">
            CompuShop
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id="NavbarLinks" className="ml-auto" navbar>
              <NavItem>
                <NavLink id="links" href="/components/">
                  Computers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Parts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>

              <Button color="success">Login</Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
