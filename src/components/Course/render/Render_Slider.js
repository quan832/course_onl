import React, { Fragment, useEffect } from "react";
// import redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCoursesTitle } from "../../../redux/actions/action";
// config
import settings from "../../../config/js/setting";
// Import css files
import Slider from "react-slick";

import { createSelector } from "reselect";

export default function Render_Slider(props) {
  // // redux
  // const coursesTitle = useSelector((state) => {
  //   console.log(state.getCoursesReducer.courses_title);
  //   return state.getCoursesReducer.courses_title;
  // });

  const coursesCreateSelector = createSelector(
    (state) => state.getCoursesTitleReducer.courses_title.data,
    (coursesTitle) => coursesTitle
  );

  const dispatch = useDispatch();

  const coursesTitle = useSelector(coursesCreateSelector);

  let { title } = props;

  // console.log(title);
  // goi api
  useEffect(() => {
    // debugger;
    dispatch(getCoursesTitle(title));
  }, []);


  const renderCourses_Slider = () => {
    return coursesTitle?.map((course, index) => {
      return (
        <Fragment key={index}>
          <div className="properties pb-20 px-2">
            <div className="properties-card">
              <div className="properties-img overlay1">
                <a href="#">
                  <img src={course.hinhAnh} alt />
                </a>
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
                      <span>4.9 ({course.luotXem} Review)</span>
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

  return <Slider {...settings}>{renderCourses_Slider()}</Slider>;
  // return <div>{props.title}</div>;
  // return <div>{props.title}</div>;
}
