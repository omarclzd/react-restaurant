import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";

const Menu = () => {
  return (
    <MDBCard>
      <MDBCardBody>
        <h3 className=" font-weight-bold">Menu</h3>
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
              <td>The Whatever</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>The Whatever</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>The Whatever</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>The Whatever</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>The Whatever</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>The Whatever</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>The Whatever</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>The Whatever</td>
              <td>$8</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Menu;
