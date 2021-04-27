import { createAction } from ".";
import { courseServices } from "../../services/Course";
import { GET_COURSES } from "../constants/types";

export const getCourses = () => {
  return (dispatch) => {
    courseServices.fetchAll().then((result) => {
      dispatch(createAction(GET_COURSES, result));
    });
  };
};
