// MovieList.js
import React, { useState, useEffect } from "react";
import MovieCard from "./MoiveCard";
import axios from "axios";
import { Container, Row, Col, Pagination } from "react-bootstrap";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5); // Number of movies per page

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((response) => {
        const movieData = response.data.data.movies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          rating: movie.rating,
          poster: movie.medium_cover_image,
        }));
        setMovies(movieData);
      })
      .catch((error) => {
        console.log("데이터 없음", error);
      });
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row>
        {currentMovies.map((movie) => (
          <Col key={movie.id} md={4} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination>
            {Array.from({
              length: Math.ceil(movies.length / moviesPerPage),
            }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieList;
