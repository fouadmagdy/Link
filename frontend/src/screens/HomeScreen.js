import React from "react";
import NavBar from "../components/NavBar";
import HighlightBanner from "../components/HighlightBanner";
import ThingsWeDo from "../components/ThingsWeDo";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";
import CopyWrite from "../components/CopyWrite";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <HighlightBanner />
      <ThingsWeDo />
      <LatestNews />
      <Footer />
      <CopyWrite />
    </>
  );
};

export default HomeScreen;
