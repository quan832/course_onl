import React from "react";
// import image

import categories1 from "../../assets/images/gallery/categories1.jpg";
import categories2 from "../../assets/images/gallery/categories2.jpg";
import categories3 from "../../assets/images/gallery/categories3.jpg";
import categories4 from "../../assets/images/gallery/categories4.jpg";
import categories5 from "../../assets/images/gallery/categories5.jpg";
import categories6 from "../../assets/images/gallery/categories6.jpg";
import categories7 from "../../assets/images/gallery/categories7.jpg";
import categories8 from "../../assets/images/gallery/categories8.jpg";

export default function Categoriesn() {
  return (
    <section className="popular-location section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-40">
              <h2>Explore top categoriesn</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-location mb-20">
              <div className="location-img">
                <img src={categories1} alt />
              </div>
              <div className="location-details">
                <h4>
                  <a href="#">Programing</a>
                </h4>
                <a href="#" className="location-btn">
                  View Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-location mb-20">
              <div className="location-img">
                <img src={categories2} alt />
              </div>
              <div className="location-details">
                <h4>
                  <a href="#">VFX</a>
                </h4>
                <a href="#" className="location-btn">
                  View Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-location mb-20">
              <div className="location-img">
                <img src={categories3} alt />
              </div>
              <div className="location-details">
                <h4>
                  <a href="#">App Development</a>
                </h4>
                <a href="#" className="location-btn">
                  View Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-location mb-20">
              <div className="location-img">
                <img src={categories4} alt />
              </div>
              <div className="location-details">
                <h4>
                  <a href="#">Technology</a>
                </h4>
                <a href="#" className="location-btn">
                  View Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-location mb-20">
              <div className="location-img">
                <img src={categories5} alt />
              </div>
              <div className="location-details">
                <h4>
                  <a href="#">Graphics Design</a>
                </h4>
                <a href="#" className="location-btn">
                  View Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-location mb-20">
              <div className="location-img">
                <img src={categories6} alt />
              </div>
              <div className="location-details">
                <h4>
                  <a href="#">Music</a>
                </h4>
                <a href="#" className="location-btn">
                  View Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-location mb-20">
              <div className="location-img">
                <img src={categories7} alt />
              </div>
              <div className="location-details">
                <h4>
                  <a href="#">Product Design</a>
                </h4>
                <a href="#" className="location-btn">
                  View Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-location mb-20">
              <div className="location-img">
                <img src={categories8} alt />
              </div>
              <div className="location-details">
                <h4>
                  <a href="#">Video Editing</a>
                </h4>
                <a href="#" className="location-btn">
                  View Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
