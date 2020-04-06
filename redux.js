import { createStore } from "redux";

export const addState = stateUS => ({
  type: "ADD",
  stateUS
});

export const deleteState = stateUS => ({
  type: "DELETE",
  stateUS
});

export const countryReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.stateUS];
    case "DELETE":
      const newArrayOfStates = [...state];
      const statesFilterFunc = newArrayOfStates.filter(
        state => state !== action.stateUS
      );
      return [...statesFilterFunc];
    default:
      return state;
  }
};

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
    // localStorage.clear();
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    // localStorage.clear();
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

// const store = createStore(countryReducer);
const store = createStore(countryReducer, persistedState);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
