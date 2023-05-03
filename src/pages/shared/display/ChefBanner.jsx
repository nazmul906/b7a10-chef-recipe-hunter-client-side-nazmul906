/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "react-bootstrap";

const ChefBanner = ({ chef }) => {
  console.log(chef);
  const [chefName, yearsOfExperience, numRecipes, likes] = chef;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={image} /> */}
        {/* <Card.Body>
          <Card.Title>{chef.chefName}</Card.Title>

          <Card.Text>
            Likes: {chef.likes} | Recipes: {chef.numRecipes} | Experience:{" "}
            {chef.yearsOfExperience} years
          </Card.Text>
        </Card.Body> */}
      </Card>
    </div>
  );
};

export default ChefBanner;
