import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGPTsearch: false,
  movieNames: null,
  movieResults: null,
};
const gptSearchSlice = createSlice({
  name: 'GPTsearch',
  initialState,
  reducers:{
    toggleGPTsearchView: (state,action)=>{
      state.showGPTsearch = !state.showGPTsearch;
    },
    addGPTmovieResult: (state,action)=>{
      const {movieNames , movieResults} = action.payload;
      state.movieNames = movieNames,
      state.movieResults = movieResults
    },
  }
})
export const { toggleGPTsearchView, addGPTmovieResult } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;