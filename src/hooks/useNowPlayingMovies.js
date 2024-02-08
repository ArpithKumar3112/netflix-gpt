import { useDispatch } from "react-redux";
import { tmdb_key } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies =()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', tmdb_key);
        const json=await data.json()
        console.log(json)
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies