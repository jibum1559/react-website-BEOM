import React, { useState } from 'react';

const CreatePags = (addAction) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');

  //추가했을 때 작동할 버튼에 대한 함수 생성
  const handleSubmit = (e) => {
    e.preventDefault();

    //추가한 내용 넣어주기
    const newAction = { id, title, genre, date };
    addAction(newAction);
    //내용 넣어주고나서 초기화 시키고 싶다면 초기화해주는 set 작성해주기

    setId('');
    setTitle('');
    setGenre('');
    setDate('');
  };
  return (
    <div>
      <h2>Create Page</h2>
      <form onSubmit={handleSubmit}>
        <label>아이디 :</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <br />

        <label>제목 :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label>내용 :</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />

        <label>날짜 :</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />

        <button type="submit">할 일 추가하기</button>
      </form>
    </div>
  );
};
export default CreatePags;

//onSubmit 제출하겠다
