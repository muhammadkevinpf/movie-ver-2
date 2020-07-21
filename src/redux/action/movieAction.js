import axios from "axios";
import { SET_MOVIE, LOADING_MOVIE, SET_PAGE } from "../types";
export const fetchDiscover = (page) => (dispatch) => {
  dispatch({ type: LOADING_MOVIE });
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=93db0e3d128406e3db7d02e0f27c49cc&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    )
    .then((res) => {
      dispatch({ type: SET_MOVIE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setCurrentPage = (pageNumber) => (dispatch) => {
  dispatch({ type: SET_PAGE, payload: pageNumber });
};

export const fetchMovieOrTv = (type, status, page) => (dispatch) => {
  dispatch({ type: LOADING_MOVIE });
  axios
    .get(
      `https://api.themoviedb.org/3/${type}/${status}?api_key=93db0e3d128406e3db7d02e0f27c49cc&page=${page}`
    )
    .then((res) => {
      dispatch({ type: SET_MOVIE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
