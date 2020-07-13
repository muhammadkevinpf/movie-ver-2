import { SET_MOVIE } from "../types";
const initialState = {
  movies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE:
      return {
        movies: action.payload,
      };
    default:
      return state;
  }
}
