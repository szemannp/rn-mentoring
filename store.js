import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./src/MovieList/MovieListSlice.js";

const rootReducer = combineReducers({
  movieList: movieListSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
