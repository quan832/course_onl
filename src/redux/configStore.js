import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import getCourses from "./reducers/getCourse";
import reduxThunk from "redux-thunk";
import getCourses_Title from "./reducers/getTitleCourse";

const rootReducer = combineReducers({
  // declare reducers in here
  getCoursesReducer: getCourses,
  getCoursesTitleReducer: getCourses_Title,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(
    // initialize store
    applyMiddleware(reduxThunk)
  )
);

export default store;
