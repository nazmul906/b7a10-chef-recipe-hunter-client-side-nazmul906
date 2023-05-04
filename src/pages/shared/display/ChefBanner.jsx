/* eslint-disable react/prop-types */
import React from "react";
import { Button, Card } from "react-bootstrap";
import LazyLoad from "react-lazyload";
const ChefBanner = ({ chef }) => {
  // console.log("cbanner", chef);
  {
    /* {chef &&
          Object.entries(chef).map(([key, value]) => (
            <div key={key}>
              <span>{value}</span>
            </div>
          ))} */
  }
  return (
    <div className="d-flex justify-content-center">
      {chef && (
        <Card className="bg-dark text-white mb-4" style={{ width: "40rem" }}>
          {/* <Card.Img variant="top" src={chef.picture} /> */}
          <LazyLoad height={200} once placeholder={<div>Loading...</div>}>
            <Card.Img variant="top" src={chef.picture} alt={chef.chefName} />
          </LazyLoad>
          <Card.Body>
            <Card.Title>{chef.chefName}</Card.Title>

            <Card.Text>
              Likes: {chef.likes} | Recipes: {chef.numRecipes} | Experience:{" "}
              {chef.yearsOfExperience} years
            </Card.Text>
            <Card.Text>{chef.shortBio}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ChefBanner;
