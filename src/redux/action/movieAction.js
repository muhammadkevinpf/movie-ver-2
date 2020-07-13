import axios from "axios";
import { SET_MOVIE } from "../types";
export const fetchDiscover = () => (dispatch) => {
  axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=93db0e3d128406e3db7d02e0f27c49cc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
    .then((res) => {
      dispatch({ type: SET_MOVIE, payload: res.data.results });
    })
    .catch((err) => {
      console.log(err);
    });
};
