import React, { FC } from 'react'
import { IPopularMovie } from '../../models/IPopularMovie'
import styles from './PopularMovie.module.css'
import { Link } from 'react-router-dom'
type PopularMovieProps ={
    item:IPopularMovie
}

const PopularMovie:FC<PopularMovieProps> = ({item}) => {
  return (
    <div className={styles.card}>
<Link state={item} to={`movieDetailsPage/${item.id.toString()}`}><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} className={styles.image} /></Link>
{/* <h3>{item.title}</h3> */}
{/* <p className={styles.overview}>{item.overview}</p> */}
{/* <span className={styles.rating}>⭐ {item.vote_average}</span> */}
    </div>
  )
}

export default PopularMovie