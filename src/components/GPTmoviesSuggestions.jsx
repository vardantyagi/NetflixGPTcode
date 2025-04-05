import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utility/constants';
import MovieList from './MovieList';

export default function GPTmoviesSuggestions() {
  const { movieResults , movieNames } = useSelector((state)=>state.GPTsearch);

  if(!movieNames) return;// shimmerUI
  if(!movieResults) return;// shimmerUI

  console.log(movieResults);
  
  return (
    <div className='p-4 m-4 bg-black/90 text-white'>
      <div>{
        movieNames.map((movieName,index)=>{
          return(
            <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
          )
        })}
      </div>
    </div>
  )
}