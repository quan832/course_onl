import React from "react";
import Banner_Courses from "../../components/Banner_Courses/Banner_Courses";
import Carousel from "../../components/Carousel/Carousel";
import Categoriesn from "../../components/Categoriesn/Categoriesn";
import Courses_Student from "../../components/Course/Courses_Student";
import Course_Slider from "../../components/Course/Course_Slider";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import Instructor from "../../components/Instructor/Instructor";

export default function Home() {
  return (
    <main>
      {/* banner */}
      <Carousel></Carousel>
      {/*  course_slider*/}
      <Course_Slider></Course_Slider>
      {/* about */}
      <Banner_Courses></Banner_Courses>
      {/* student */}
      <Courses_Student></Courses_Student>
      {/* feedback */}
      <Feedback></Feedback>
      {/* categorism */}
      <Categoriesn></Categoriesn>
      {/* Instructor */}
      <Instructor></Instructor>
      {/* Footer */}
      <Footer></Footer>
    </main>
  );
}
