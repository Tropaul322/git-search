import { SET_USER, SET_MESSAGE, SET_REPOS, SET_LOADING } from "../actions/types";
const defState = {
  user: {},
  isLoading: false,
  message: false,
  repos: []
};

export default function (state = defState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case SET_MESSAGE:
      return { ...state, message: action.message };
    case SET_REPOS:
      return {...state, repos: action.repos};
    case SET_LOADING:
      return {...state, isLoading: action.isLoading};
    default:
      return state;
  }
}
