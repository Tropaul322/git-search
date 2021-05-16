import { SET_USER, SET_MESSAGE, SET_REPOS } from "../actions/types";
const defState = {
  user: {},
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
    default:
      return state;
  }
}
