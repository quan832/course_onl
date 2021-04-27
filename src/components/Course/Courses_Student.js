import React, { Fragment, useEffect } from "react";
// slick slider
// Import css files
import Slider from "react-slick";
import settings from "../../config/js/setting";
// import images

// redux
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../redux/actions/action";

// css
import "./Course_Slider.css";
export default function Courses_Student(props) {
  // get reducer
  const studentCourses = useSelector((state) => {
    // console.log(state.getCoursesReducer.result);
    return state.getCoursesReducer.result;
  });

  const dispatch = useDispatch();

  // goi api
  useEffect(() => {
    dispatch(getCourses());
  }, []);

  // render course
  const renderCourseStudent = () => {
    return studentCourses.data?.map((course, index) => {
      return (
        <Fragment>
          <div className="properties pb-20 px-2">
            <div className="properties-card">
              <div className="properties-img overlay1">
                <a href="#">
                  <img src={course.hinhAnh} alt />
                </a>
                <div className="img-text">
                  <span>$118</span>
                </div>
              </div>
              <div className="properties-caption">
                <h3>
                  <a href="#">{course["tenKhoaHoc"]}</a>
                </h3>
                <p>
                  by {course.nguoiTao.hoTen ? course.nguoiTao.hoTen : "Default"}
                </p>
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
        </Fragment>
      );
    });
  };

  console.log(studentCourses.data);
  return (
    <section className="popular-directorya-area section-padding fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle mb-40">
              <h2>Students are viewing</h2>
            </div>
          </div>
        </div>
        <div className="directory-active">
          <Slider {...settings}>{renderCourseStudent()}</Slider>
        </div>
      </div>
    </section>
  );
}
