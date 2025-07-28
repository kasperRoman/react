import React from 'react'
import { useLocation } from 'react-router-dom'
import { IPopularMovie } from '../models/IPopularMovie';



const MovieDetailsPage = () => {


    let location=useLocation();
    const movie:IPopularMovie = location.state

// let params =useParams();
// console.log(params)
  return (
    <div>
        <h3>{movie.title}</h3> 
        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} />
 <p >{movie.overview}</p> 
<span >⭐ {movie.vote_average}</span>
    </div>
  )
}

export default MovieDetailsPage