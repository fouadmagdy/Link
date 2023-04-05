import React from "react";
import NavBar from "../components/NavBar";
import HighlightBanner from "../components/HighlightBanner";
import { Container } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container>
      <NavBar />
      <HighlightBanner />
    </Container>
  );
};

export default HomeScreen;
