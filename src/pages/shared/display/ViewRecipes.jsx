/* eslint-disable react/prop-types */
import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ViewRecipes = ({ recipes }) => {
  const {
    recipeName,
    recipeId,
    chef_id,
    chef,
    ingredients,
    cookingMethod,
    rating,
  } = recipes;
  return (
    <div>
      {/* <Card>
        {/* <Card.Img variant="top" src={image_url} /> */}
      {/* <Card.Body> */}
      {/* <Card.Title>{recipeName}</Card.Title>
          <Card.Text>{chef}</Card.Text>
          <Card.Text></Card.Text>
          <ListGroup>
            <ListGroup.Item>{ingredients}</ListGroup.Item>
          </ListGroup>  */}
      {/* <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft> All News in this category
            </Button>
          </Link> */}
      {/* </Card.Body>
      </Card> */}

      <Row xs={1} md={2} lg={1} className="g-4">
        <Col>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>{recipeName}</Card.Title>
              <Card.Text>{chef}</Card.Text>
              <ListGroup>
                <ListGroup.Item>{ingredients}</ListGroup.Item>
              </ListGroup>
              <p>{cookingMethod}</p>
              <Card.Text>{rating}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ViewRecipes;
