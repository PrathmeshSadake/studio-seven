import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mb-5 py-4">
      <Row>
        <Col sm={6} className="pe-3 pe-sm-5">
          <img
            src="https://source.unsplash.com/jlo7Bf4tUoY"
            alt=""
            className="w-100"
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col
          sm={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            className="mb-4"
            style={{ fontSize: "4rem", fontWeight: "bolder" }}
          >
            BIGGEST DEALS ON TOP BRANDS
          </h1>
          <h3 className="mb-1">Up to 20% off EVERYTHING</h3>
          <h4 className="mb-2">15% off on Rs. 2999 & 20% off on Rs. 3999</h4>
          <h5 className="mb-3" style={{ color: "#676" }}>
            Grab this offer on New Arrivals, Sale or BOTH.
          </h5>
          <Button variant="outline-info" style={{ alignSelf: "flex-start" }}>
            EXPLORE TOP BRANDS
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
