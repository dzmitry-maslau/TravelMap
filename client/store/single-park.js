import Axios from "axios";

export const getSinglePark = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(`/api/parks/${id}`);
      dispatch(gotSinglePark(data));
    } catch (error) {
      next(error);
    }
  };
};

export const gotSinglePark = (park) => {
  return {
    type: "GOT_SINGLE_PARK",
    park,
  };
};

export const singleParkReducer = (park = {}, action) => {
  switch (action.type) {
    case "GOT_SINGLE_PARK":
      return action.park;
    default:
      return park;
  }
};
