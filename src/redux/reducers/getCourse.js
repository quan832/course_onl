import { GET_COURSES } from "../constants/types";

const stateDefault = {
  result: {},
};

const getCourses = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSES:
  
      state.result = action.payload;

      return { ...state };
    default:
      return { ...state };
  }
};

export default getCourses;
