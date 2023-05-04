import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import ChefCard from "../display/ChefCard";

const Chef = () => {
  const allChef = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <Container>
        <Row>
          {allChef.map((item) => (
            <ChefCard key={item.id} chef={item}></ChefCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Chef;
