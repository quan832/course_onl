import React from "react";
//import images
import h1_her1 from "../../assets/images/hero/h1_hero1.jpg";
import hero_shape from "../../assets/images/hero/hero-shape.jpg";

import "./Carousel.scss";
export default function Carousel() {
  return (
    <div>
      <div
        className="slider-area slider-height container"
        style={{ backgroundImage: `url(${hero_shape})` }}
      >
        <div className="slider-active">
          <div className="single-slider">
            <div className="slider-cap-wrapper pt-5">
              <div className="hero-caption">
                <h1 data-animation="fadeInUp" data-delay=".2s">
                  Learn new skills online with top educators
                </h1>
                <p data-animation="fadeInUp" data-delay=".6s">
                  Learn 100% online with world-class universities
                  <br /> and industry experts.
                </p>
                <form action="#" className="search-box">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="What do you want to learn?"
                    />
                    <a className="search-form" href="#">
                      <i className=" fa fa-search" />
                    </a>
                  </div>
                </form>
              </div>
              <div className="hero-img position-relative"></div>
            </div>
          </div>
        </div>
      </div>
      {/* banner seciton */}
      {/* <div
        className="jumbotron jumbotron-fluid big-banner mb-0 container"
        style={{ paddingTop: 132 }}
      >
        <div className="container">
          <div className="keep-going">
            <div className="text-dark">
              <h1 className="udlite-heading-xxl">Keep going</h1>
              <p className="lead">
                Your goals are worth it. Learn the latest skills from $11.99.
                Offer ends today.
              </p>
            </div>
            <div className="form-what">
              <form className="form-inline my-2 my-lg-0 form-inline-what">
                <input
                  className="udlite-text-input form-control form-control-lg mr-sm-0 col-8 btn-light border-0"
                  style={{ borderRadius: "5px 0px 0px 5px", maxWidth: "100%" }}
                  type="search"
                  placeholder="What do you want to learn?"
                  aria-label="Search"
                />
                <button
                  className="btn btn-light btn-lg my-2 my-sm-0 ml-0 col-2"
                  style={{ borderRadius: "0px 5px 5px 0px" }}
                  type="submit"
                >
                  <i className="fas fa-search text-muted" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
