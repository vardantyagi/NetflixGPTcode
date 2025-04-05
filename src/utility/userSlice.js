import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    addUser: (state,action)=>{
      // state.user.initialState = action.payload;
      return action.payload;
    },
    removeUser: (state,action)=>{
      // state.user.initialState = null;
      return null;
    }
  }
})
export const {addUser,removeUser} = userSlice.actions;
export  default userSlice.reducer;