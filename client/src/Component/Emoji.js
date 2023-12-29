import React, { useState, useEffect } from 'react';
import './Emoji.css';

const EmogiBoard = () => {
  const [board] = useState(generateBoard());

  function generateBoard() {
    const emojis = ['🍕', '🎉', '🎈', '🌟', '🚀', '🐱', '🌈', '🍦', '🎸'];
    const boardSize = 3;
    const shuffleEmoji = shuffleArray(emojis);
    const board = [];

    for (let i = 0; i < boardSize; i++) {
      const row = shuffleEmoji.slice(i * boardSize, (i + 1) * boardSize);
      board.push(row);
    }
    return board;
  }

  //이모지를 정렬하면서 동시에 랜덤으로 섞어주는 함수 작성
  function shuffleArray(array) {
    //가져온 배열을 arrayEmoji 담아주는 역할을 함
    const arrayEmoji = array.slice();
    //배열을 끝에서부터 시작해서 첫번째까지 역순으로 반복
    for (let i = arrayEmoji.length - 1; i > 0; i--) {
      //지금 자리값과 서로 위치를 바꿀 인덱스 번호를 생성
      const j = Math.floor(Math.random() * (i + 1));
      //생성된 숫자 j는 지정되지 않은 랜덤 숫자값으로
      //지정된 숫자 i와 서로 가지고 있는 이모지를 교환
      //서로 무작위로 교환된 이모지가 3X3 배열로 저장
      [arrayEmoji[i], arrayEmoji[j]] = [arrayEmoji[j], arrayEmoji[i]];
    }
    return arrayEmoji;
  }

  return (
    <div className="emoji-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="emoji-row">
          {row.map((emoji, columnIndex) => (
            <div key={columnIndex} className="emoji-cell">
              {emoji}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default EmogiBoard;
