import React from "react";
// Import css files
import Slider from "react-slick";
// import image
import founder from "../../assets/images/gallery/founder-img.png";
export default function Feedback() {
  // setting slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="testimonial-area testimonial-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-11">
              <div className="h1-testimonial-active">
                <Slider {...settings}>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <h2>Student says about us</h2>
                        <p>
                          Everybody is different, which is why we offer styles
                          for every body. Laborum fuga incidunt laboriosam
                          voluptas iure, delectus dignissimos facilis neque
                          nulla earum.
                        </p>
                      </div>
                      <div className="testimonial-founder d-flex align-items-center justify-content-center">
                        <div className="founder-img">
                          <img src={founder} alt />
                        </div>
                        <div className="founder-text">
                          <span>Petey Cruiser</span>
                          <p>Student at Onedu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <h2>Student says about us</h2>
                        <p>
                          Everybody is different, which is why we offer styles
                          for every body. Laborum fuga incidunt laboriosam
                          voluptas iure, delectus dignissimos facilis neque
                          nulla earum.
                        </p>
                      </div>
                      <div className="testimonial-founder d-flex align-items-center justify-content-center">
                        <div className="founder-img">
                          <img src={founder} alt />
                        </div>
                        <div className="founder-text">
                          <span>Petey Cruiser</span>
                          <p>Student at Onedu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
