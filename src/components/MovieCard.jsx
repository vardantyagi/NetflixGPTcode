import React from 'react'
import { IMG_CDN_URL } from '../utility/constants';

export default function MovieCard({posterPath,title}) {
  if(!posterPath) return
  return (
    <div className='w-30 md:w-48'>
      <img src={`${IMG_CDN_URL}${posterPath}`} alt={title} />
    </div>
  )
}