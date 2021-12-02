import Axios from "axios";

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
        `https://restcountries.com//v3.1/alpha/${shortName}`
      );
      const { data } = await Axios.post("/api/countries", {
        userId: userId,
        country: name,
        countryId: id,
        flag: info[0].flags.svg,
        capital: info[0].capital[0],
        population: info[0].population,
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
