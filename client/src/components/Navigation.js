import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            width="49"
            height="34"
            viewBox="0 0 49 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.3 0.0996094C21.7 0.0996094 14 7.69961 14 16.9996C14 26.2996 21.8 33.8996 31.3 33.8996C40.8 33.8996 48.6 26.2996 48.6 16.9996C48.7 7.69961 40.8 0.0996094 31.3 0.0996094ZM31.3 23.1996C27.8 23.1996 24.8 20.3996 24.8 16.9996C24.8 13.5996 27.7 10.7996 31.3 10.7996C34.9 10.7996 37.8 13.5996 37.8 16.9996C37.7 20.3996 34.9 23.1996 31.3 23.1996ZM14 5.09961V29.6996H7.9L0 5.09961H14Z"
              fill="#8B3FFD"
            />
          </svg>
          <span style={{ marginLeft: "0.25rem" }}>STUDIOSEVEN.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex-row align-items-center">
            <Nav.Link href="#deets">REGISTER</Nav.Link>
            <Nav.Link href="#memes">SIGN IN</Nav.Link>
            <i className="ms-3 fas fa-shopping-cart"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
