import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import * as ROUTES from "../../constant/routes";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color=" deep-orange darken-4" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">SPICY</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to={ROUTES.HOME_PAGE}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ROUTES.MENU_PAGE}>Menu</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ROUTES.ABOUT_PAGE}>About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ROUTES.GALLERY_PAGE}>Gallery</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right />
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navigation;
