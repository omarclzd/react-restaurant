import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBIcon } from "mdbreact";

function HomePage() {
  return (
    <MDBContainer>
      <MDBRow className="text-center">
        <MDBCol>
          <MDBAnimation type="bounce">
            <h1>
              <strong>Omar's Restaurant</strong>
            </h1>
          </MDBAnimation>
          <h2>Mexican Cuizine</h2>

          <h3>AUSTIN, TEXAS</h3>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol>
          <img
            src="https://i.imgur.com/gpRyUJZ.png"
            className="img-fluid"
            alt="img"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol>
          <MDBAnimation type="bounce">
            <MDBIcon fab icon="facebook-square" size="2x" className="m-3" />
            <MDBIcon fab icon="instagram" size="2x" className="m-3" />
            <MDBIcon fab icon="tumblr" size="2x" className="m-3" />
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default HomePage;
