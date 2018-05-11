import React from "react";
import {
  Navbar,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import Container from "./Container";

export default class Header extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState(({ isOpen }) => {
      return {
        isOpen: !isOpen
      };
    });
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Container
            render={() => (
              <React.Fragment>
                <NavbarBrand href="/">TSH Multiservicios</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#about-us">¿Quiénes somos?</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#services">Servicios</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#customers">Clientes</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#contact">Contacto</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </React.Fragment>
            )}
          />
        </Navbar>
      </div>
    );
  }
}
