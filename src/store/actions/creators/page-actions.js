import { SET_USER, SET_MESSAGE } from "../types";

const setUser = (user) => ({ type: SET_USER, user });
const setMessage = (message) => ({ type: SET_MESSAGE, message });

export default {
  setUser,
  setMessage,
};
