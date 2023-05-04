import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../display/ChefCard";

const Chef = () => {
  const allChef = useLoaderData();

  return (
    <Container>
      <Row>
        {allChef.map((item) => (
          <ChefCard key={item.id} chef={item}></ChefCard>
        ))}
      </Row>
    </Container>
  );
};

export default Chef;
