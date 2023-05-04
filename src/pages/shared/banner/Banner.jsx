import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";
const Banner = () => {
  return (
    <Container className=" banner mb-4 mt-2">
      {/* <Row> */}
      {/* <Col md={6}> */}

      <h1 className=" text-center text-md-center text-white mt-4">
        Welcome to our recipe page
      </h1>

      {/* </Col> */}
      {/* <Col md={6}> */}
      {/* <img src="" alt="your-image-alt" height="400px" weight="300px" /> */}
      {/* </Col> */}
      {/* </Row> */}
    </Container>
  );
};

export default Banner;
