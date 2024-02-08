import React from 'react'
import { Image_TMDB_CDN_URL } from '../utils/constants'

export const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
       <img alt="Movie logo"
       src={Image_TMDB_CDN_URL+posterPath}/>
    </div>
  )
}
