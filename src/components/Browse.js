import { useEffect } from "react";
import { tmdb_key } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse=()=>{
  
    useNowPlayingMovies();

    return( 
    <div><Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
    )
}
export default Browse;