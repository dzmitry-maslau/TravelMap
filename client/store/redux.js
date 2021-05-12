require("babel-polyfill");
import userReducer from "./user";
import { parkReducer } from "./parks";
import { stateReducer } from "./states";
import { countryReducer } from "./countries";
import { singleParkReducer } from "./single-park";
import { visitedParkReducer } from "./visited-parks";

import thunkMiddleware from "redux-thunk";
import loggingMiddleware from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware);
const rootReducer = combineReducers({
  state: stateReducer,
  country: countryReducer,
  user: userReducer,
  park: parkReducer,
  visitedPark: visitedParkReducer,
  singlePark: singleParkReducer,
});

const store = createStore(rootReducer, middlewares);
export default store;
