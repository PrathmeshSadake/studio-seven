import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="pt-5 pb-2">
      <Row>
        <Col sm={3}>
          <ul>
            <li>
              <h5>Categories</h5>
            </li>
            <li>Trending</li>
            <li>Denims</li>
            <li>Jackets</li>
            <li>Hoodies</li>
            <li>Top Wear</li>
          </ul>
        </Col>
        <Col sm={3}>
          <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>Register</li>
            <li>Studioseven Influencer</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </Col>
        <Col sm>
          <h3 style={{ letterSpacing: "4px" }} className="mb-2">
            Newsletter
          </h3>
          <p>
            Keep up with our latest sales and offers. Subscribe to our
            newsletter.
          </p>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              placeholder="you@example.com"
              aria-describedby="inputGroup-sizing-default"
            />
            <Button
              style={{ backgroundColor: "#7525f7", borderColor: "#690ef9" }}
            >
              Subscribe
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <p>Made with ♥️ By Prathmesh Sadake &copy; 2022 | Studioseven</p>
      </Row>
    </Container>
  );
};

export default Footer;
