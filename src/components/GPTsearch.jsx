import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import GPTmoviesSuggestions from './GPTmoviesSuggestions'
import bg from '../images/background.jpg'

export default function GPTsearch() {
  return (
    <div className=''>
      <div className='fixed -z-10'>
        <img className='w-screen h-screen object-cover' src={bg} alt="bg" />
      </div>
      <div className=''>
        <GPTsearchBar />
        <GPTmoviesSuggestions />
      </div>
    </div>
  )
}

// 1:23:41
// 2:33:33
// 3:22:13