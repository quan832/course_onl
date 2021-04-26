import React from "react";
// Import css files
import Slider from "react-slick";
// import images
import course1 from "../../assets/images/gallery/courses1.jpg";
// import css
import "./Course_Slider.css";
export default function Course_Slider() {
  //   setting slick slider
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="popular-directorya-area section-padding fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-40">
              <h2>The world's largest selection of courses</h2>
              <p>
                Choose from 130,000 online video courses with new additions
                published every month
              </p>
            </div>
          </div>
        </div>
        <div className="directory-active">
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
                    <a href="#">Python for Data Science and Machine Learning</a>
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
                    <a href="#">Python for Data Science and Machine Learning</a>
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
                    <a href="#">Python for Data Science and Machine Learning</a>
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
                    <a href="#">Python for Data Science and Machine Learning</a>
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
                    <a href="#">Python for Data Science and Machine Learning</a>
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
                    <a href="#">Python for Data Science and Machine Learning</a>
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
    </section>
  );
}
