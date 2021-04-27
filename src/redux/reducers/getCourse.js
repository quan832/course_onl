import {
  GET_COURSES,
  GET_COURSES_TITLE,
  GET_TITLE_COURSES,
} from "../constants/types";

const stateDefault = {
  result: {},
  title: {},
  courses_title: {},
};

const getCourses = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSES:
      state.result = action.payload;

      return { ...state };

    case GET_TITLE_COURSES:
      state.title = action.payload;

      return { ...state };

    case GET_COURSES_TITLE:
      state.courses_title = action.payload;

      console.log(state);
      return { ...state };

    default:
      return { ...state };
  }
};

export default getCourses;
