import { combineReducers } from "redux";

import cellarReducer from "./cellar/cellar.reducer";

const rootReducer = combineReducers({
  cellar: cellarReducer,
});

export default rootReducer;
