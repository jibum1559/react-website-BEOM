import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Weather from './Weather/Weather';
import MusicPlayer from './Music/MusicPlayer';
import Emoji from './Emoji';
import MovieList from './Moive/MovieListCarousel';
const Home = () => {
  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>리액트 웹사이트</Card.Title>
            <Card.Text>리액트와 부트스트랩을 활용한 웹사이트</Card.Text>
            <Emoji />
          </Card.Body>
        </Card>
        <Col>
          <MovieList />
          <MusicPlayer />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
