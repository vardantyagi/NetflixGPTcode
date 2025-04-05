import React, { useRef } from 'react'
import { lang } from '../utility/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utility/openai';
import { API_OPTIONS } from '../utility/constants';
import geminiai from '../utility/geminiai';
import { addGPTmovieResult } from '../utility/gptSearchSlice';

export default function GPTsearchBar() {
  const dispatch = useDispatch();
  const langKey = useSelector((state)=>state.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie)=>{
    const movieData = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await movieData.json();
    console.log(json);
    
    return json.results;
  }

  const handleSearchClick = async (e)=>{
    e.preventDefault();
    console.log(searchText.current.value);
    if(!searchText.current.value) return;

    // make an API key to GEMINI API and get Movie Results

    const geminiQuery = `Act as a movie recommendation system and suggest some movies for the query: ${searchText.current.value}.Only give me name of 5 movies, comma separated like the example given ahead. Example Result: Gadar,Sholay,Don,Kashmiri Files,Golmaal`;

    const geminiResults = await geminiai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: geminiQuery,
    });
    console.log('data........');
    
    console.log(geminiResults);
    console.log(geminiResults?.text);
    if(!geminiResults){
      // TODO: Write Error Handling
      console.log('result not found');
      return;
    }

    const gptMovies = geminiResults?.text?.split(',');
    // for each movie, I will search for TMDB API by searchMovieTMDB() function
    const promiseData = gptMovies.map((movie)=>searchMovieTMDB(movie.trim()));
    // [Promise,Promise,Promise,Promise,Promise]
    const tmdbResults = await Promise.all(promiseData);
    console.log(tmdbResults);
    dispatch(addGPTmovieResult({movieNames: gptMovies,movieResults: tmdbResults}))
  }
  return (
    <div className='pt-[36%] md:pt-[7%]'>
      <form className='bg-black w-full md:w-1/2 grid grid-cols-12 mx-auto rounded-lg'>
        <input ref={searchText} type="text" className='p-4 m-4 bg-white col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button className='text-center py-2  bg-red-700 text-white font-bold rounded-lg col-span-3 m-4' onClick={(e)=>handleSearchClick(e)}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}