import React from "react";
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
      <Row xs={1} md={2} className="g-4">
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        {/* <Col key={idx}> */}
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              {id}
              <Card.Title>{chefName}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <button>
              <Link to={`/viewrecipe/${id}`}>Show more recipe</Link>
            </button>
          </Card>
        </Col>
        {/* ))} */}
      </Row>
    </div>
  );
};

export default ChefCard;
