import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h5>About Us</h5>
            <p>
              Our page provide various recipe of world top chef.You can visist
              us and learn some of their most popular recipe
            </p>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <h5>Contact Us</h5>
            <p>
              Address: Banani,Dhaka
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
