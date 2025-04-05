import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/constants";
import { addTopRatedMovies } from "../utility/moviesSlice";
import { useEffect } from "react";

export function useTopRatedMovies(){
  const dispatch = useDispatch();

  // memorisation
  const topRatedMovies = useSelector((state)=>state.movies.topRatedMovies);

  const getTopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  }
  useEffect(()=>{
    // memorisation
    !topRatedMovies && getTopRatedMovies();
  },[])
  // return json.results;
}