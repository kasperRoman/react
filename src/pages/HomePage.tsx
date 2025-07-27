import React from 'react'
import PopularMovies from '../components/popularMovies.tsx/PopularMovies'

const HomePage = () => {
  return (
    <div>
      <h2>Popular Movies</h2>
      {
        <PopularMovies/>
      }
    </div>
  )
}

export default HomePage