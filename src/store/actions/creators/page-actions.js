import { SET_USER, SET_MESSAGE, SET_REPOS, SET_LOADING } from "../types";

const setUser = (user) => ({ type: SET_USER, user });
const setMessage = (message) => ({ type: SET_MESSAGE, message });
const setRepos = (repos) => ({ type: SET_REPOS, repos });
const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export default {
  setUser,
  setMessage,
  setRepos,
  setLoading,
};
