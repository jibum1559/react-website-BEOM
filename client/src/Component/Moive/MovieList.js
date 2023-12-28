import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MoiveCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://yts.mx/api/v2/list_movies.json')
      .then((response) => {
        const MovieData = response.data.data.movies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          rating: movie.rating,
          poster: movie.medium_cover_image,
        }));
        setMovies(MovieData);
      })
      .catch((error) => {
        console.log('데이터 없음', error);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
export default MovieList;
