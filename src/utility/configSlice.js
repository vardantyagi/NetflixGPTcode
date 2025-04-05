// for language selection for the search

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: 'en',
}
const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    changeLanguage: (state,action)=>{
      state.lang = action.payload
    },
  }
})
export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;