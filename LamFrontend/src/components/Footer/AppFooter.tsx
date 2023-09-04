import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppFooter.css"; // Import the custom CSS file
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const AppFooter = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                About Me
              </h6>
              <p>
                Hey visitor, welcome to my portfolio page! My name is Lam and I
                am a software engineer who specializes in full stack development
                and automation through the use of api integrations.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Frontend Frameworks
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Backend Technologies
              </h6>
              <p>
                <a href="https://nodejs.org/" className="text-reset">
                  Node.js
                </a>
              </p>
              <p>
                <a href="https://react.dev/" className="text-reset">
                  Express.js
                </a>
              </p>
              <p>
                <a href="https://flask.palletsprojects.com/en/2.3.x/" className="text-reset">
                  Flask
                </a>
              </p>
              <p>
                <a href="https://www.djangoproject.com/" className="text-reset">
                  Django
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                <a href="https://www.linkedin.com/in/lam-dang-22684a1a1/" className="text-reset">Linkedin</a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> Phone: + 832-941-2894
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> Email: lamdang274586@gmail.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="">
          lamdang.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default AppFooter;


