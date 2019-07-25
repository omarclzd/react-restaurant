import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

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
            className="img-fluid m-2"
            alt="img"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Info
          </h2>
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
