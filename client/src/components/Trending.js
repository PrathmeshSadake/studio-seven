import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Trending = () => {
  return (
    <Container className="py-5">
      <h3 style={{ wordSpacing: "4px" }} className="mb-3">
        Trending Categories
      </h3>
      <Row>
        <Col sm>
          <div className="img-container">
            <img
              src="https://source.unsplash.com/EtOMMg1nSR8"
              alt=""
              className="w-100 trending__img"
              style={{ objectFit: "cover", height: "400px" }}
            />
            <div class="middle">
              <div class="text">Denims</div>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="img-container">
            <img
              src="https://source.unsplash.com/GIJilzvYLP8"
              alt=""
              className="w-100 trending__img"
              style={{ objectFit: "cover", height: "400px" }}
            />
            <div class="middle">
              <div class="text">Jackets</div>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="img-container">
            <img
              src="https://source.unsplash.com/vtnhu9LgScs"
              alt=""
              className="w-100 trending__img"
              style={{ objectFit: "cover", height: "400px" }}
            />
            <div class="middle">
              <div class="text">Hoodies</div>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="img-container">
            <img
              src="https://source.unsplash.com/JoM9rbc_Rxg"
              alt=""
              className="w-100 trending__img"
              style={{ objectFit: "cover", height: "400px" }}
            />
            <div class="middle">
              <div class="text">Top Wears</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
