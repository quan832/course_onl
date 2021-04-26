import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Course_Slider from "../../components/Course/Course_Slider";

export default function Home() {
  return (
    <main>
      {/* banner */}
      <Carousel></Carousel>
      {/*  slider*/}
      <Course_Slider></Course_Slider>
    </main>
  );
}
