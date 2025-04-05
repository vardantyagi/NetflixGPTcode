import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({title,movies}) {
  if(!movies) return;

  return (
    <div className='px-0 md:px-6'>
      <h1 className='text-xl md:text-3xl py-4'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent'>
        <div className='flex gap-2'>
          {
            movies.map((movie)=>{
              return(
                <MovieCard key={movie?.id} posterPath={movie?.poster_path}
                  alt={movie?.title}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}