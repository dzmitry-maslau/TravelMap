import axios from "axios";
import history from "../history";

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

const defaultUser = {};

export const getUser = (user) => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method, firstName) => async (
  dispatch
) => {
  let res;
  try {
    if (method === "signup") {
      res = await axios.post(`/auth/signup`, { email, password, firstName });
    } else {
      res = await axios.post(`/auth/login`, { email, password });
    }
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }
  try {
    dispatch(getUser(res.data));
    history.push("/states");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post("/auth/logout");
    dispatch(removeUser());
    history.push("/login");
  } catch (err) {
    console.error(err);
  }
};

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
