import axios from "axios";
import { SET_MOVIE, LOADING_MOVIE, SET_PAGE } from "../types";
export const fetchDiscover = (page) => (dispatch) => {
  dispatch({ type: LOADING_MOVIE });
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=93db0e3d128406e3db7d02e0f27c49cc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    )
    .then((res) => {
      dispatch({ type: SET_MOVIE, payload: res.data });
      // dispatch({ type: SET_PAGE, payload: 1 });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setCurrentPage = (pageNumber) => (dispatch) => {
  dispatch({ type: SET_PAGE, payload: pageNumber });
};
