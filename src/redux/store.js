import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import movieReducer from "./reducer/movieReducer";

const initialState = {};
const middleWare = [thunk];

const reducers = combineReducers({
  movie: movieReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
