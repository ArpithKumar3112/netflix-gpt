import { useEffect, useState } from "react";
import { tmdb_key } from "../utils/constants";

const VideoBackground=({movieId})=>{
    const[trailerId,setTrailerId]=useState();
    useEffect(()=>{
        getMovieVideos();
    },[])
    const getMovieVideos=async()=>{
            const data=await fetch("https://api.themoviedb.org/3/movie/866398/videos?language=en-US",tmdb_key)
            const json=await data.json();
            //console.log(json)
            const trailerArray=json.results.filter(video=>video.type==="Trailer")
            const trailer=trailerArray.length===0?json.results[0]:trailerArray[0];
            console.log(trailer)
            setTrailerId(trailer.key)
    }   
    
    
  return (
    <div className="">
    <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}
export default VideoBackground;