import React from "react";
import Menu from "../Menu/Menu";

import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

function MenuPage() {
  return (
    <MDBContainer>
      <MDBRow className="text-center">
        <MDBCol>
          <MDBAnimation>
            <img
              src="https://i.imgur.com/qyz3OGI.png"
              className="img-fluid"
              alt="img"
            />
          </MDBAnimation>
          <h3 className="font-weight-bold">Menu</h3>
        </MDBCol>
      </MDBRow>
      <MDBRow className="m-3 text-center">
        <MDBCol className="m-3">
          <Menu />
        </MDBCol>
        <MDBCol className="m-3">
          <Menu />
        </MDBCol>
      </MDBRow>
      <MDBRow className="m-3 text-center">
        <MDBCol className="m-3">
          <Menu />
        </MDBCol>
        <MDBCol className="m-3">
          <Menu />
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol />
      </MDBRow>
    </MDBContainer>
  );
}

export default MenuPage;
