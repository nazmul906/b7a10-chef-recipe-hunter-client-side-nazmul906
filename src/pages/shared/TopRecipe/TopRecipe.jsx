import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./toprecipe.css";
const TopRecipe = () => {
  return (
    <div className="mt-4">
      <h2 className="text-center text-sm-center mb-3 ">Top Recipes</h2>
      <Container>
        <Row>
          <Col md={4}>
            <Card
              className="bg-danger text-white mb-4"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>
                  <h5>Spicy garlic chicken</h5>
                </Card.Title>

                <Card.Text>This is top fav recipe</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="bg-danger  text-white mb-4"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>
                  <h5>Butter Fish tacoos</h5>
                </Card.Title>

                <Card.Text>This is top fav recipe</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="bg-danger  text-white mb-4"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>
                  <h5>Waky Cake</h5>
                </Card.Title>

                <Card.Text>This is top fav recipe</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopRecipe;
