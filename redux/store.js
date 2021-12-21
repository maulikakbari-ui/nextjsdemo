// import { createStore } from "redux";
// import rootReducer from "./reducers/index";

// const { composeWithDevTools } = require("redux-devtools-extension");

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
