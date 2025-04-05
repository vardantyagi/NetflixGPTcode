import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/constants";
import { addPopularMovies } from "../utility/moviesSlice";
import { useEffect } from "react";

export function usePopularMovies(){
  const dispatch = useDispatch();
  
  // memorisation
  const popularMovies = useSelector((state)=>state.movies.popularMovies);

  const getNowPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }
  useEffect(()=>{
    // memorisation
    !popularMovies && getNowPopularMovies();
  },[])
  // return json.results;
}