import Axios from "axios";
import thunkMiddleware from "redux-thunk";
import loggingMiddleware from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./user_redux";

require("babel-polyfill");

export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get("/api/countries");
      dispatch(gotAllCountries(data));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const gotAllCountries = (countries) => ({
  type: "GOT_ALL_COUNTRIES",
  countries,
});

export const addCountry = (name, id, shortName, userId) => {
  return async (dispatch) => {
    try {
      const { data: info } = await Axios.get(
        `https://restcountries.eu/rest/v2/alpha/${shortName}`
      );
      const { data } = await Axios.post("/api/countries", {
        userId: userId,
        country: name,
        countryId: id,
        flag: info.flag,
        capital: info.capital,
        population: info.population,
      });
      dispatch(addedCountry(data));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const addedCountry = (data) => ({
  type: "ADDED_COUNTRY",
  data,
});

export const deleteCountry = (name, id) => {
  return async (dispatch) => {
    try {
      await Axios.delete(`/api/countries/${id}`);
      dispatch(deletedCountry(name));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const deletedCountry = (name) => ({
  type: "DELETED_COUNTRY",
  name,
});

export const getAllStates = () => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get("/api/states");
      dispatch(gotAllStates(data));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const gotAllStates = (states) => ({
  type: "GOT_ALL_STATES",
  states,
});

export const addState = (name, id, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.post("/api/states", {
        userId: userId,
        state: name,
        stateId: id,
      });
      dispatch(addedState(data));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const addedState = (data) => ({
  type: "ADDED_STATE",
  data,
});

export const deleteState = (name, id) => {
  return async (dispatch) => {
    try {
      await Axios.delete(`/api/states/${id}`);
      dispatch(deletedState(name));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const deletedState = (name) => ({
  type: "DELETED_STATE",
  name,
});

export const stateReducer = (states = [], action) => {
  switch (action.type) {
    case "GOT_ALL_STATES":
      return action.states;
    case "ADDED_STATE":
      return [...states, action.data];
    case "DELETED_STATE":
      const newArrayOfStates = [...states];
      const statesFilterFunc = newArrayOfStates.filter(
        (elem) => elem.state !== action.name
      );
      return [...statesFilterFunc];
    default:
      return states;
  }
};

export const countryReducer = (countries = [], action) => {
  switch (action.type) {
    case "GOT_ALL_COUNTRIES":
      return action.countries;
    case "ADDED_COUNTRY":
      return [...countries, action.data];
    case "DELETED_COUNTRY":
      const newArrayOfCountries = [...countries];
      const worldFilterFunc = newArrayOfCountries.filter(
        (elem) => elem.country !== action.name
      );
      return [...worldFilterFunc];
    default:
      return countries;
  }
};

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware);
const rootReducer = combineReducers({
  stateReducer,
  countryReducer,
  userReducer,
});

const store = createStore(rootReducer, middlewares);
export default store;
