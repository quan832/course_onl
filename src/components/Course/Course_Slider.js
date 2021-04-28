import React, { useEffect, useState } from "react";

// import css
import "./Course_Slider.css";
// setting
import settings from "../../config/js/setting";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getCoursesTitle, getTitleCourses } from "../../redux/actions/action";

import Render_Slider from "./render/Render_Slider";

export default function Course_Slider() {
  // redux
  const titleCourse = useSelector((state) => {
    return state.getCoursesReducer.title.data;
  });

  const dispatch = useDispatch();

  // goi api
  useEffect(() => {
    dispatch(getTitleCourses());
  }, []);

  // console.log(titleCourse);

  const [active, setActive] = useState(0);

  // render title
  const renderTitle = () => {
    return titleCourse?.map((title, index) => {
      return (
        <li class="nav-item" key={index}>
          <a
            class={`nav-link ${index === 0 ? "active" : ""}`}
            id="profile-tab"
            data-toggle="tab"
            href={"#" + title.maDanhMuc}
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={() => setActive(index)}
          >
            <div data-index={1}>
              <div className="nav-btn">
                <button
                  type="button"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <span className="text-heading-course">{title.maDanhMuc}</span>
                </button>
              </div>
            </div>
          </a>
        </li>
      );
    });
  };

  // render noi dung theo title
  const render_Courses_Title = () => {
    return titleCourse?.map((title, index) => {
      if (index == active) {
        return (
          <div
            class="tab-pane fade show active"
            id={title.maDanhMuc}
            role="tabpanel"
            aria-labelledby="home-tab"
            key={index}
          >
            <Render_Slider
              index={index}
              title={title.maDanhMuc}
            ></Render_Slider>
          </div>
        );
      } else {
        return null;
        // return (
        //   <div
        //     class="tab-pane fade "
        //     id={title.maDanhMuc}
        //     role="tabpanel"
        //     aria-labelledby="home-tab"
        //     key={index}
        //   >
        //     <div>...</div>
        //     <Render_Slider
        //       title={title.maDanhMuc}
        //       index={index}
        //     ></Render_Slider>
        //   </div>
        // );
      }
    });
  };

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
                  {renderTitle()}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="directory-active">
          <div class="tab-content" id="myTabContent">
            {render_Courses_Title()}
          </div>
        </div>
      </div>
    </section>
  );
}
