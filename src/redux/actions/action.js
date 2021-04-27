import { createAction } from ".";
import { courseServices } from "../../services/Course";
import {
  GET_COURSES,
  GET_COURSES_TITLE,
  GET_TITLE_COURSES,
} from "../constants/types";

export const getCourses = () => {
  return (dispatch) => {
    courseServices.fetchAll().then((result) => {
      dispatch(createAction(GET_COURSES, result));
    });
  };
};

export const getTitleCourses = () => {
  return (dispatch) => {
    courseServices.fetchTitleCourses().then((result) => {
      dispatch(createAction(GET_TITLE_COURSES, result));
    });
  };
};

export const getCoursesTitle = (title) => {
  return (dispatch) => {
    courseServices.fetchCourses_Title(title).then((result) => {
      dispatch(createAction(GET_COURSES_TITLE, result));
    });
  };
};
