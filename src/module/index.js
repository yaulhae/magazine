import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";

import auth from "./auth";
import post from "./post";
import image from "./image";
import comment from "./comment";

const rootReducer = combineReducers({
  auth,
  post,
  image,
  comment,
});

export default rootReducer;
