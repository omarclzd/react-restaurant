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
          <h3 className="text-left font-weight-bold">Menu</h3>
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
