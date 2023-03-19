import { combineReducers } from "redux";

import api from "../api";
import courses from "./slices/coursesSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  courses,
});

export default rootReducer;
