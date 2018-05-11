import React from "react";

import Header from "../components/Header";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Customers from "../components/Customers";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import BigImage from "../components/BigImage";

import "bootstrap/dist/css/bootstrap.min.css";

export default () => (
  <React.Fragment>
    <Header />
    <Carousel />
    <About />
    <BigImage />
    <Services />
    <Customers />
    <Contact />
    <Footer />
  </React.Fragment>
);
