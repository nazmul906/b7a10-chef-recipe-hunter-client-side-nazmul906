import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Trending = () => {
  return (
    <div className="mt-4">
      <h2 className="text-center mb-3">Trending now</h2>
      <Container>
        <Row>
          <Col md={4}>
            <Card
              className="bg-dark text-white mb-4"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>Beef Wellington</Card.Title>

                <Card.Text>
                  Beef Wellington is known to be a decadent meat with an AMAZING
                  presentation. The combination of a thick, juicy beef
                  tenderloin, special duxelles and prosciutto all wrapped in a
                  pastry shell is pure heaven.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="bg-dark   text-white mb-4"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>Lemon Roasted Chicken</Card.Title>

                <Card.Text>
                  The benefits of the hot steaming lemon going into the chicken
                  are very obvious as the meat tastes amazing, and the chicken
                  cooks slightly quicker because of it.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="bg-dark   text-white mb-4"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>Pasta Carbonara</Card.Title>

                <Card.Text>
                  Carbonara is a Roman pasta dish made with eggs, hard cheese,
                  cured pork, and black pepper. The dish took its modern form
                  and name in the middle of the 20th century.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
