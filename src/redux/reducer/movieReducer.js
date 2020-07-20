import { SET_MOVIE, LOADING_MOVIE, SET_PAGE } from "../types";
const initialState = {
  movies: [],
  totalPage: 0,
  currentPage: 1,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movies: action.payload.results,
        totalPage: action.payload.total_pages,
        loading: false,
      };
    case LOADING_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
