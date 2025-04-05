import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer.jsx'
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from '../customHooks/usePopularMovies.js';
import { useTopRatedMovies } from '../customHooks/useTopRatedMovies.js';
import { useUpcomingMovies } from '../customHooks/useUpcomingMovies.js';
import GPTsearch from './GPTsearch.jsx';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGPTsearchView = useSelector((state)=>state.GPTsearch.showGPTsearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      {
        showGPTsearchView ?
        <GPTsearch />:
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse