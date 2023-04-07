import React from "react";
import NavBar from "../components/NavBar";
import HighlightBanner from "../components/HighlightBanner";
import ThingsWeDo from "../components/ThingsWeDo";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <HighlightBanner />
      <ThingsWeDo />
      <Footer />
    </>
  );
};

export default HomeScreen;
