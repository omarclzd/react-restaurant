import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBAnimation,
  MDBIcon
} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="deep-orange darken-4" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className="text-center">
            <MDBAnimation>
              <MDBIcon fab icon="facebook-square" size="2x" className="m-3" />
              <MDBIcon fab icon="instagram" size="2x" className="m-3" />
              <MDBIcon fab icon="tumblr" size="2x" className="m-3" />
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/omarclzd"> Omarclzd </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
