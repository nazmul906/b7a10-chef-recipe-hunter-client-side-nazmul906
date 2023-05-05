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

                <Card.Text>
                  It is a delicious chicken stir-fry with a thick garlicky
                  sauce. The sauce is super savory and has that unique taste and
                  texture that get with all takeout dishes.
                </Card.Text>
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

                <Card.Text>
                  Whether snapper, mahi mahi, grouper, flounder, halibut or cod,
                  wild, local fish are the tastiest choice for Baja-style tacos.
                </Card.Text>
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
                  <h5>Chocolate brownie</h5>
                </Card.Title>

                <Card.Text>
                  A chocolate brownie, or simply a brownie, is a chocolate baked
                  confection. Brownies come in a variety of forms and may be
                  either fudgy or cakey, depending on their density.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopRecipe;
