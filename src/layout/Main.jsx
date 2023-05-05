import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useNavigation } from "react-router-dom";

import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";
import { Spinner } from "react-bootstrap";
const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <Container>
        <div>
          {navigation.state === "loading" && (
            <Spinner animation="border" variant="primary" />
          )}
        </div>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
