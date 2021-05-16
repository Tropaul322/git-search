import { SET_USER, SET_MESSAGE, SET_REPOS } from "../types";

const setUser = (user) => ({ type: SET_USER, user });
const setMessage = (message) => ({ type: SET_MESSAGE, message });
const setRepos = (repos) => ({ type: SET_REPOS, repos });

export default {
  setUser,
  setMessage,
  setRepos
};
