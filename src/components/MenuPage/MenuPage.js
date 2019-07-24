import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";

function MenuPage() {
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
          <MDBTable
            // borderless
            hover
          >
            <MDBTableHead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>
                  <h5>The Whatever</h5>
                </td>
                <td>
                  <h5>$8</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>The Whatever</h5>
                </td>
                <td>
                  <h5>$8</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>The Whatever</h5>
                </td>
                <td>
                  <h5>$8</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>The Whatever</h5>
                </td>
                <td>
                  <h5>$8</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>The Whatever</h5>
                </td>
                <td>
                  <h5>$8</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>The Whatever</h5>
                </td>
                <td>
                  <h5>$8</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>The Whatever</h5>
                </td>
                <td>
                  <h5>$8</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>The Whatever</h5>
                </td>
                <td>
                  <h5>$8</h5>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
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

export default MenuPage;
