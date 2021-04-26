import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  // declare reducers in here
});

// initialize store
const store = createStore(rootReducer);

export default store;
