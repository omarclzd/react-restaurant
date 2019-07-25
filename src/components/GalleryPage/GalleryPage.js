import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
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
          <MDBAnimation>
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
                    src="https://i.imgur.com/GlCoHkY.jpg"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://i.imgur.com/PYbTWNC.jpg"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://i.imgur.com/ZdFTtGi.jpg"
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Gallery
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol />
      </MDBRow>
    </MDBContainer>
  );
}

export default GalleryPage;
