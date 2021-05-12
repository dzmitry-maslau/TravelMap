import Axios from "axios";

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
