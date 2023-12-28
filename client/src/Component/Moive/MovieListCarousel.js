import React, {useState, useEffect} from "react";
//부모
import MovieCard from "./MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    //외부에서 API를 통해 영화 데이터를 가지고오고 내가 원하는 내용만 보여주고 싶다. 
    //(then에다가 내가 원하는) 내용만 가져올 수 있도록 요청함

    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json')
        .then(response => {
            //가져온 데이터 중에서 필요한 정보만 가지고 와서 업데이트
            //response.data.data.movies.map , 위 사이트 안에 dada 를 가져와야함
            const MovieData = response.data.data.movies.map(movie => ({ 
                id : movie.id,
                title : movie.title,
                rating : movie.rating,
                poster : movie.medium_cover_image,
            }));
            setMovies(MovieData);
        })
            .catch(error => {
                console.log('데이터 없음', error);
            });
        
    }, []);

    return (
        <div>
            <Carousel>
            {movies.map(movie => (
                <Carousel.Item key={movie.id}>
                <MovieCard key={movie.id} movie={movie}/>
                </Carousel.Item>
            ))}
            </Carousel>
        </div>
    )
}
export default MovieList;