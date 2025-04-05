import React from 'react'
import playIcon from '../images/play-button.png'

export default function VideoTitle({title,overview}) {
  console.log(overview);
  console.log(title);
  
  return (
    <div className='pl-4 md:pl-18 pt-[20%] px-18 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block text-lg py-6 w-1/4'>{overview}</p>
      <div className='flex gap-2'>
        <button className='mt-4 md:mt-0 text-sm md:text-xl px-5 text-black md:p-4 md:px-14 h-10 md:h-15 bg-white rounded-lg flex justify-center gap-2 hover:opacity-80 items-center'>
            <img width={20} className='fill w-4 md:w-6' src={playIcon} alt="play" />
            Play
          </button>
        <button className='hidden md:inline-block bg-gray-500 p-4 px-12 text-xl text-white opacity-50 rounded-lg hover:opacity-70'>More Info</button>
      </div>
    </div>
  )
}