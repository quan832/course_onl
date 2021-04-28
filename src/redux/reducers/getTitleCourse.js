import { GET_COURSES_TITLE } from "../constants/types";

const stateDefault = {
  courses_title: {
      
  },
};

const getCourses_Title = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSES_TITLE:
      state.courses_title = action.payload;

      console.log(state);
      return { ...state };

    default:
      return { ...state };
  }
};

export default getCourses_Title;
