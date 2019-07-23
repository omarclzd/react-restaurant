import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

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
        <MDBCol />
      </MDBRow>
    </MDBContainer>
  );
}

export default HomePage;
