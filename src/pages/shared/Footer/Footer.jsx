import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2023 My Awesome Website. All rights reserved.</p>
            <p>Created by Nazmul</p>
          </Col>
          <Col md={6}>
            <ul className="list-inline text-right">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
