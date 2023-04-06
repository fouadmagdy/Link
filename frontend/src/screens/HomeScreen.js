import React from "react";
import NavBar from "../components/NavBar";
import HighlightBanner from "../components/HighlightBanner";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container>
      <NavBar />
      <HighlightBanner />
      <Footer />
    </Container>
  );
};

export default HomeScreen;
