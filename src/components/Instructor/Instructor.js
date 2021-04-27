import React from "react";
import tick_image from "../../assets/images/icon/tick.svg";
import play_button from "../../assets/images/icon/play-button.svg";
import model from "../../assets/images/gallery/hocSinhGioi.jpg";
export default function Instructor() {
  return (
    <section className="about-area2 section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="offset-xxl-1 col-xxl-4 col-xl-5 col-lg-6 col-md-12">
            <div className="about-caption about-caption2">
              <div className="section-tittle mb-25">
                <h2>Become an Instructor</h2>
                <p className="mb-20">
                  The automated process all your website tasks. Discover tools
                  and techniques to engage effectively with vulnerable children
                  and young people.
                </p>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src={tick_image} alt />
                </div>
                <div className="features-caption">
                  <p>
                    Techniques to engage effectively with vulnerable children
                    and young people.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src={tick_image} alt />
                </div>
                <div className="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together.
                  </p>
                </div>
              </div>
              <div className="single-features mb-40">
                <div className="features-icon">
                  <img src={tick_image} alt />
                </div>
                <div className="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together.
                  </p>
                </div>
              </div>
              <div className="slider-btns">
                <a
                  data-animation="fadeInLeft"
                  data-delay="1.0s"
                  href="about.html"
                  className="btn hero-btn mr-15"
                >
                  Become a Instructor
                </a>
                <a
                  data-animation="fadeInRight"
                  data-delay="1.0s"
                  className="popup-video video-btn"
                  href="https://www.youtube.com/watch?v=Wxdj970RM7M"
                >
                  <img src={play_button} alt />
                  Watch Video
                </a>
              </div>
            </div>
          </div>
          <div className="offset-xl-2  col-xxl-5 col-xl-5 col-lg-6 col-md-12">
            <div className="about-img about-img2   ">
              <img src={model} alt style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
