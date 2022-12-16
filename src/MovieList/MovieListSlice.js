import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  loading: false,
  error: false,
  errorText: null,
}

const movieListSlice = createSlice({
  name: 'movieList',
  initialState: initialState,
  reducers: {},
})

export default movieListSlice.reducer;

