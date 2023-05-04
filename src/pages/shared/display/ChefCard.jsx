/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types

const ChefCard = ({ chef }) => {
  // eslint-disable-next-line react/prop-types
  const { id, chefName } = chef;

  //   console.log("chef", chef);

  return (
    <Col md={4}>
      <Card className="bg-dark text-white mb-4" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={chef.picture} />
          <Card.Title>{chef.chefName}</Card.Title>

          <Card.Text>
            Likes: {chef.likes} | Recipes: {chef.numRecipes} | Experience:{" "}
            {chef.yearsOfExperience} years
          </Card.Text>
          <Card.Text>{chef.shortBio}</Card.Text>
        </Card.Body>
        <Link to={`/viewrecipe/${id}`}>
          <Button className="mb-4">View Recipes</Button>
        </Link>
      </Card>
    </Col>
  );
};

export default ChefCard;
