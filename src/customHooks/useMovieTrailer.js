import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/constants";
import { addTrailerVideo } from "../utility/moviesSlice";
import { useEffect } from "react";

export const useMovieTrailer = (movieId)=>{
  console.log(movieId);
  const dispatch = useDispatch();
  
  // memorisation
  const trailerVideo = useSelector((state)=>state.movies.trailerVideo);

  const getMovieVideos = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video)=>video.type=="Trailer");
    const trailer = filterData.length?filterData[0]:json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  }
  useEffect(()=>{
    // memorisation
    !trailerVideo && getMovieVideos();
  },[])
}