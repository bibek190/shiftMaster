import React, { useEffect } from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import FeaturesPage from "../../Pages/Feature/Feature";
import Pricing from "../../Pages/Pricing/Pricing";
import ContactPage from "../../Pages/Contact/Contact";
import ScrollToTopButton from "../ScrollToTop/ScrollToTop";

const LandingPage = () => {
  return (
    <>
      <Home />
      <About />
      <FeaturesPage />
      <Pricing />
      <ContactPage />
      <ScrollToTopButton />
    </>
  );
};

export default LandingPage;
