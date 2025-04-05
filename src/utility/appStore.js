import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import moviesReducer from './moviesSlice'
import gptSearchReducer from './gptSearchSlice'
import configReducer from './configSlice'

export const appStore = configureStore({  
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    GPTsearch: gptSearchReducer,
    config: configReducer,
  },
})