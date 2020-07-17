import { SET_MOVIE, LOADING_MOVIE } from "../types";
const initialState = {
  movies: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE:
      return {
        movies: action.payload,
        loading: false,
      };
    case LOADING_MOVIE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
