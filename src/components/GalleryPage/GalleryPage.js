import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBIcon,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from "mdbreact";

function GalleryPage() {
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
          <h3 className="text-left font-weight-bold">Gallery</h3>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
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

export default GalleryPage;
