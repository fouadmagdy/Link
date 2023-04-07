import React from "react";
import NavBar from "../components/NavBar";
import HighlightBanner from "../components/HighlightBanner";
import ThingsWeDo from "../components/ThingsWeDo";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <HighlightBanner />
      <ThingsWeDo />
      <LatestNews />
      <Footer />
    </>
  );
};

export default HomeScreen;
