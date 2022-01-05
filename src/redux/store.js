import { createStore } from "redux";

import rootReducer from "./root-reducer";

const enchancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, enchancer);

export default store;
