import React, { useState, useEffect } from "react";
//부모
import MovieCard from "./MoiveCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

// 직접 만든 화살표 아이콘 컴포넌트
const CustomPrevIcon = () => (
  <span style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
    &lt;
  </span>
);
const CustomNextIcon = () => (
  <span style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
    &gt;
  </span>
);

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  //외부에서 API를 통해 영화 데이터를 가지고오고 내가 원하는 내용만 보여주고 싶다.
  //(then에다가 내가 원하는) 내용만 가져올 수 있도록 요청함

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((response) => {
        //가져온 데이터 중에서 필요한 정보만 가지고 와서 업데이트
        //response.data.data.movies.map , 위 사이트 안에 dada 를 가져와야함
        const MovieData = response.data.data.movies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          rating: movie.rating,
          poster: movie.medium_cover_image,
        }));
        setMovies(MovieData);
      })
      .catch((error) => {
        console.log("데이터 없음", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <style>
            {`
              .carousel-indicators {
                bottom: -40px; /* 하단 바 위치 조정 */
              }
              .carousel-indicators [data-bs-target] {
              background-color: #ab8585;
            }
            `}
          </style>
          <div className="card-title text-center">
            <Carousel
              prevIcon={<CustomPrevIcon />}
              nextIcon={<CustomNextIcon />}
            >
              {movies.map((movie) => (
                <Carousel.Item key={movie.id}>
                  <MovieCard key={movie.id} movie={movie} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
