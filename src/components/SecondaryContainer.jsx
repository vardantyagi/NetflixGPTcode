import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export default function SecondaryContainer() {
  const movies = useSelector((state)=>state.movies);
  return (
    <div className='mt-52 md:mt-5 bg-black text-white'>
      <div className='-mt-52 relative z-10 pl-4 md:pl-12'>
        <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies}  />
        <MovieList title={'Top Rated'} movies={movies?.topRatedMovies}  />
        <MovieList title={'Popular'} movies={movies?.popularMovies}  />
        <MovieList title={'Upcomming Movies'} movies={movies?.upcomingMovies}  />
        {/* <MovieList title={'Horror'} movies={movies?.popularMovies}  /> */}
      </div>
    </div>
  )
}