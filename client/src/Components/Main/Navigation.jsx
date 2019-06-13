import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div>
        <Navbar id="NavCSS" color="dark" dark>
          <NavbarBrand id="NavbarBrand" href="/" className="mr-auto">
            CompuShop
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink id="NavbarLinks" href="/Buy/">
                  Buy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="NavbarLinks" href="/Sell/">
                  Sell
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="NavbarLinks" href="/Login/">
                  Users
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
