import { applyMiddleware, combineReducers, createStore } from "redux";
import getCourses from "./reducers/getCourse";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  // declare reducers in here
  getCoursesReducer: getCourses,
});

// initialize store
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
