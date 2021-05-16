import { SET_USER, SET_MESSAGE } from "../actions/types";
const defState = {
  user: {},
  message: false,
};

export default function (state = defState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case SET_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
}
