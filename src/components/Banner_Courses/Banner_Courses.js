import React from "react";
import about1 from "../../assets/images/gallery/about1.jpg";
export default function Banner_Courses() {
  return (
    <section className="about-area1 about-area2 fix">
      <div className="container">
        <div className="row align-items-center section-overlay">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12">
            <div className="about-img about-img1  ">
              <img src={about1} alt />
            </div>
          </div>
          <div className="offset-xxl-1 col-xxl-5 col-xl-7 col-lg-6 col-md-12">
            <div className="about-caption about-caption1">
              <div className="section-tittle mb-25">
                <h2>The world’s largest selection of online courses</h2>
                <p className="mb-20">
                  Millions of people have used Kingster to decide which online
                  course to take. We aggregate courses from many universities to
                  help you find the best courses on almost any subject, wherever
                  they exist. Our goal is to make online education work for
                  everyone.
                </p>
              </div>
              <div className="slider-btns">
                <a
                  data-animation="fadeInLeft"
                  data-delay="1.0s"
                  href="about.html"
                  className="btn hero-btn"
                >
                  Browse Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
