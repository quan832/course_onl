import React from "react";
// Import css files
import Slider from "react-slick";
// import images
import course1 from "../../assets/images/gallery/courses1.jpg";
import course2 from "../../assets/images/gallery/courses2.jpg";
import course3 from "../../assets/images/gallery/courses3.jpg";
import course4 from "../../assets/images/gallery/courses4.jpg";
// import css
import "./Course_Slider.css";
// setting
import settings from "../../config/js/setting";

export default function Course_Slider() {
  return (
    <section className="popular-directorya-area section-padding fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-left mb-40">
              <h2>The world's largest selection of courses</h2>
              <p>
                Choose from 130,000 online video courses with new additions
                published every month
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          {/* course deatiles section */}
          <div className="container carousel">
            <div className="tab-btn">
              <div className="carousel-tab">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#slider1"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      <div data-index={0} className="carousel--scroll-item">
                        <div className="nav-btn">
                          <button
                            type="button"
                            aria-selected="true"
                            role="tab"
                            tabIndex={0}
                          >
                            <span
                              className="text-heading-course"
                              style={{ color: "#3c3b37" }}
                            >
                              Python
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#slider2"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <div data-index={1}>
                        <div className="nav-btn">
                          <button
                            type="button"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            <span className="text-heading-course">
                              Javascript
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#slider3"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <div data-index={2}>
                        <div className="nav-btn">
                          <button
                            type="button"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            <span className="text-heading-course">
                              Web Development
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="directory-active">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="slider1"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <Slider {...settings}>
                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course2} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course3} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div
              class="tab-pane fade"
              id="slider2"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <Slider {...settings}>
                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course3} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course4} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div
              class="tab-pane fade"
              id="slider3"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <Slider {...settings}>
                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="properties pb-20 px-2">
                  <div className="properties-card">
                    <div className="properties-img overlay1">
                      <a href="#">
                        <img src={course1} alt />
                      </a>
                      <div className="img-text">
                        <span>$118</span>
                      </div>
                    </div>
                    <div className="properties-caption">
                      <h3>
                        <a href="#">
                          Python for Data Science and Machine Learning
                        </a>
                      </h3>
                      <p>by Mario Speedwagon</p>
                      <div className="ratting">
                        <ul>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>4.9 (120 Review)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
