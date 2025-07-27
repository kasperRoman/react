import React, { useEffect, useState } from "react";
import { IPopularMovie } from "../../models/IPopularMovie";
import { getPopularMovies } from "../../servises/api.servise";
import PopularMovie from "../popularMovie/PopularMovie";
import styles from "./PopularMovies.module.css";

const PopularMovies = () => {
  const [movies, setMovies] = useState<IPopularMovie[]>([]);
  useEffect(() => {
    getPopularMovies().then((value) => setMovies(value));
  }, []);

  return (
    <div className={styles.movies}>
      
      {movies.map((movie) => (
        <PopularMovie key={movie.id} item={movie} />
      ))}
    </div>
  );
};

export default PopularMovies;
