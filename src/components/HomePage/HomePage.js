import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constant/routes";

import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBIcon } from "mdbreact";

function HomePage() {
  return (
    <MDBContainer>
      <MDBRow className="text-center">
        <MDBCol>
          <MDBAnimation type="bounce">
            <img
              src="https://i.imgur.com/qyz3OGI.png"
              className="img-fluid"
              alt="img"
            />
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol>
          <img
            src="https://i.imgur.com/NgH7jFA.png"
            className="img-fluid mr-2"
            alt="img"
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="text-center">
        <MDBCol>
          <Link to={ROUTES.MENU_PAGE} className="text-reset brown-text">
            <h5 className="font-weight-bold m-3">
              <MDBIcon icon="utensils" className="pr-2" />
              Menu
            </h5>
          </Link>
          <Link to={ROUTES.ABOUT_PAGE} className="text-reset deep-orange-text">
            <h5 className="font-weight-bold m-3">
              <MDBIcon icon="info" className="pr-2" />
              About
            </h5>
          </Link>
          <Link to={ROUTES.GALLERY_PAGE} className="text-reset cyan-text">
            <h5 className="font-weight-bold m-3">
              <MDBIcon icon="image" className="pr-2" />
              Gallery
            </h5>
          </Link>
          <h3 className="h1-responsive font-weight-bold text-center m-4">
            Info
          </h3>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default HomePage;
