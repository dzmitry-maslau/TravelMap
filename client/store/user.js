import Axios from "axios";
import history from "../history";

const defaultUser = {};

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

export const getUser = (user) => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });

export const changeName = (name, email, id, style) => {
  return async (dispatch) => {
    try {
      await Axios.put(`/api/users/${id}`, {
        firstName: name,
        email: email,
        style: style,
      });
      const res = await Axios.get("/auth/me");
      dispatch(getUser(res.data || defaultUser));
    } catch (error) {
      // next(error);
      console.error(error);
    }
  };
};

export const me = () => async (dispatch) => {
  try {
    const res = await Axios.get("/auth/me");
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
      res = await Axios.post(`/auth/signup`, { email, password, firstName });
    } else {
      res = await Axios.post(`/auth/login`, { email, password });
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
    await Axios.post("/auth/logout");
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
