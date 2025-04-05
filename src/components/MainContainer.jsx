import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useNowPlayingMovies } from '../customHooks/useNowPlayingMovies';

export default function MainContainer() {
  // useNowPlayingMovies();
  const movies = useSelector((state)=>state.movies?.nowPlayingMovies);
  console.log(movies);
  if(!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);
  console.log(mainMovie?.original_title);
  console.log(mainMovie?.overview);
  console.log(mainMovie?.poster_path);
  
  
  // const {original_title,overview,id} = mainMovie;
  return (
    <div className='pt-[30%] md:pt-0 bg-black'>
      <VideoTitle title={mainMovie?.original_title} overview={mainMovie?.overview} posterPath={mainMovie.poster_path} />
      <VideoBackground movieId={mainMovie?.id} />
    </div>
  )
}

// 2:11:46