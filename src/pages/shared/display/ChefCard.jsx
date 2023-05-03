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
    <div>
      {/* <Row xs={1} md={2} className="g-4"> */}
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
      {/* <Col key={idx}> */}
      {/* <Col>
          <Card>
            <Card.Img variant="top" src={chef.picture} />
            <Card.Body>
              {id}
              <Card.Title>{chefName}</Card.Title>
              <Card.Text>
                Likes: {chef.likes} | Recipes: {chef.numRecipes} | Experience:{" "}
                {chef.yearsOfExperience} years
              </Card.Text>
            </Card.Body>

            <Link to={`/viewrecipe/${id}`}>
              <Button>View Recipes</Button>
            </Link>
          </Card>
        </Col>
        {/* ))} */}
      {/* </Row> */}
      <Row>
        {chef && (
          <Col md={6} lg={6}>
            {" "}
            <Card
              className="bg-dark text-white mb-4"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={chef.picture} />
              <Card.Body>
                <Card.Title>{chef.chefName}</Card.Title>

                <Card.Text>
                  Likes: {chef.likes} | Recipes: {chef.numRecipes} | Experience:{" "}
                  {chef.yearsOfExperience} years
                </Card.Text>
                <Card.Text>{chef.shortBio}</Card.Text>
              </Card.Body>
              <Link to={`/viewrecipe/${id}`}>
                <Button>View Recipes</Button>
              </Link>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ChefCard;
