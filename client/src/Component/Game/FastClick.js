import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FastClick = () => {
  const [numbers, setNumbers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetchGame();
  }, []);

  //마우스 클릭 함수
  const mouseClick = (number) => {
    if (!gameOver && number === score + 1) {
      setScore(score + 1);
      if (score + 1 === 10) {
        setGameOver(true);
      }
    }
  };

  //게임 초기화
  const fetchGame = () => {
    //새로운 번호를 생성하는데 번호가 랜덤으로 자리에 들어갈 수 있도록 설정
    //Array.from({length:10}, (_, index) => index +1)
    //길이가 10인 배열을 만들고 각 숫자가 0부터 시작하기 때문에 1부터 시작할 수 있도록 +1을 해줌
    //.sort(() => Math.random() - 0.5)
    //값 정렬을 할 때 랜덤으로 정렬 할 수 있도록 Math.random()을 이용
    //sort를 이요할 때 0 정렬 방향이 되기 때문에 0이 아닌 - 0.5로 정렬 > 무작위 정렬
    const newNumbers = Array.from({ length: 10 }, (_, index) => index + 1).sort(
      () => Math.random() - 0.5
    );
    //게임 재시작 할 경우 새로운 번호 생성 점수 0으로 초기화 게임오버를 false로 설정
    setNumbers(newNumbers);
    setScore(0);
    setGameOver(false);
  };

  return (
    <Container className="mt-5">
      <h1>1부터 10까지 숫자 맞추기</h1>
      {gameOver ? (
        <div>
          <Alert variant="success">
            <p className="lead">게임종료! 최종 점수 : {score}</p>
            <Button variant="primary" size="lg" block onClick={fetchGame}>
              ReStart?
            </Button>
          </Alert>
        </div>
      ) : (
        <div>
          <p className="lead text-center">현재 게임 점수 : {score}</p>
          <Row className="justify-content-center">
            {numbers.map((number) => (
              <Col key={number} className="mt-3">
                <Button
                  variant="light"
                  size="lg"
                  block
                  onClick={() => mouseClick(number)}
                >
                  {number}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default FastClick;
