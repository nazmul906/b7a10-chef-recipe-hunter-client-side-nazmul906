import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <Link>Privacy Policy</Link>
              </li>
              <li className="list-inline-item">
                <Link>Contact</Link>
              </li>
              <li className="list-inline-item">
                <Link>Email</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
