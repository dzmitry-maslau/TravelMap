import Axios from "axios";

export const getAllVisitedParks = () => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get("/api/visited-parks");
      dispatch(gotAllVisitedParks(data));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const gotAllVisitedParks = (parks) => ({
  type: "GOT_ALL_VISITED_PARKS",
  parks,
});

export const addPark = (park, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.post("/api/visited-parks", {
        userId: userId,
        park: park,
      });
      dispatch(addedPark(data));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const addedPark = (data) => ({
  type: "ADDED_PARK",
  data,
});

export const deletePark = (name, id) => {
  return async (dispatch) => {
    try {
      await Axios.delete(`/api/visited-parks/${id}`);
      dispatch(deletedPark(name));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const deletedPark = (name) => ({
  type: "DELETED_PARK",
  name,
});

export const visitedParkReducer = (parks = [], action) => {
  switch (action.type) {
    case "GOT_ALL_VISITED_PARKS":
      return action.parks;
    case "ADDED_PARK":
      return [...parks, action.data];
    case "DELETED_PARK":
      const newArrayOfParks = [...parks];
      const parksFilterFunc = newArrayOfParks.filter(
        (elem) => elem.park !== action.name
      );
      return [...parksFilterFunc];
    default:
      return parks;
  }
};
