import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const Newsletter = () => {
  return (
    <Container
      style={{ maxWidth: "600px", textAlign: "center", background: "#e4d3ff" }}
      className="p-5 my-5"
    >
      <h3 style={{ letterSpacing: "4px" }} className="mb-2">
        Newsletter
      </h3>
      <p>
        Keep up with our latest sales and offers. Subscribe to our newsletter.
      </p>
      <Row>
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
      </Row>
    </Container>
  );
};

export default Newsletter;
