// upcoming
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/constants";
import { addUpcomingMovies } from "../utility/moviesSlice";
import { useEffect } from "react";

export function useUpcomingMovies(){
  const dispatch = useDispatch();

  // memorisation
  const upcomingMovies = useSelector((state)=>state.movies.upcomingMovies);

  const getUpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  }
  useEffect(()=>{
    // memorisation
    !upcomingMovies && getUpcomingMovies();
  },[])
  // return json.results;
}