import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import ChefCard from "../display/ChefCard";
import TopRecipe from "../TopRecipe/TopRecipe";
import Trending from "../Trending/Trending";

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
        <TopRecipe></TopRecipe>
        <Trending></Trending>
      </Container>
    </div>
  );
};

export default Chef;
