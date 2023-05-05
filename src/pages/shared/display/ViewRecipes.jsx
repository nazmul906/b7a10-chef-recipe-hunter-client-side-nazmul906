/* eslint-disable react/prop-types */
import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const ViewRecipes = ({ recipes }) => {
  const [toastShow, setToastShow] = useState(false);
  const showToastMessage = () => {
    toast.success("This is my favourite recipe");
    setToastShow(true);
  };
  const {
    recipeName,
    recipeId,
    chef_id,
    chef,
    ingredients,
    cookingMethod,
    rating,
  } = recipes;
  const styles = {
    backgroundColor: "#F9D9B9",
    /* Add other styles such as height, width, padding etc. here */
  };
  return (
    <div className="mb-4 ">
      {/* <Row xs={1} md={2} lg={1} className="g-4"> */}
      {/* <Col> */}
      <Card className="" style={styles}>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className=" text-center">
          <Card.Title>Recipe : {recipeName}</Card.Title>
          <Card.Text>Chef : {chef}</Card.Text>
          {/* <ListGroup>
            <ListGroup.Item className="mb-2">{ingredients}</ListGroup.Item>
          </ListGroup> */}
          <Card.Text className="g-4">Ingredient : {ingredients}</Card.Text>
          {/* <p>{cookingMethod}</p> */}

          <Card.Text>{cookingMethod}</Card.Text>
          <Card.Text>{rating}</Card.Text>
          <Button
            className="btn-success"
            disabled={toastShow}
            onClick={showToastMessage}
          >
            Favourite
          </Button>
        </Card.Body>
      </Card>
      {/* </Col> */}
      {/* </Row> */}
      <ToastContainer />
    </div>
  );
};

export default ViewRecipes;
