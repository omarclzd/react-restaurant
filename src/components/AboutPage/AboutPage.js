import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBMask
} from "mdbreact";

function AboutPage() {
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
          <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody className="text-center">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                About
              </h2>
              <p className="text-center w-responsive mx-auto mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="pink-text">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="map" className="pr-2" />
                      Adventure
                    </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Title of the news</strong>
                  </h4>

                  <p className="dark-grey-text">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus voluptas.
                  </p>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="graduation-cap" className="pr-2" />
                      Education
                    </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Title of the news</strong>
                  </h4>

                  <p className="dark-grey-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis voluptatum deleniti atque corrupti quos
                    dolores.
                  </p>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                      alt=""
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="blue-text">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="fire" className="pr-2" />
                      Culture
                    </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Title of the news</strong>
                  </h4>

                  <MDBBtn color="deep-orange darken-4" rounded size="md">
                    Read more
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
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

export default AboutPage;
