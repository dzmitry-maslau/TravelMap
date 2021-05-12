import Axios from "axios";

export const getAllParks = () => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get("/api/parks");
      dispatch(gotAllParks(data));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const gotAllParks = (parks) => ({
  type: "GOT_ALL_PARKS",
  parks,
});

export const parkReducer = (parks = [], action) => {
  switch (action.type) {
    case "GOT_ALL_PARKS":
      return action.parks;
    default:
      return parks;
  }
};
