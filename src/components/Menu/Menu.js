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
      </MDBCardBody>
    </MDBCard>
  );
};

export default Menu;
