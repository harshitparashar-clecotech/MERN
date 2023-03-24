import React from "react";
import { Card } from "../Card";
import { Carousel } from "../Carousel";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div>
        <Card />
      </div>
      <Footer />
    </div>
  );
};
