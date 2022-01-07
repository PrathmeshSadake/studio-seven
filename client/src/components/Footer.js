import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
      <Row>
        <Col sm={4}>sm=4</Col>
        <Col sm={8}>sm=8</Col>
      </Row>
    </Container>
  );
};

export default Footer;
