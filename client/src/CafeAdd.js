// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CafeAdd() {
  const [cafes, setCafes] = useState([]);
  const [newCafe, setNewCafe] = useState({ name: '', price: '' });

  useEffect(() => {
    const timestamp = new Date().getTime();
    axios
      .get(`http://localhost:5003/api/cafe?timestamp=${timestamp}`)
      .then((response) => setCafes(response.data))
      .catch((error) => console.error('에러입니다.', error));
  }, []);

  const addCafe = () => {
    axios
      .post('http://localhost:5003/api/cafes', newCafe)
      .then(() => {
        axios
          .get(
            `http://localhost:5003/api/cafe?timestamp=${new Date().getTime()}`
          )
          .then((response) => {
            setCafes(response.data);
            setNewCafe({ name: '', price: '' });
          })
          .catch((error) => console.error('에러입니다.', error));
      })
      .catch((error) => console.error('에러입니다.', error));
  };

  return (
    <div>
      <h1>카페 리스트</h1>

      <ul>
        {cafes.map((cafe) => (
          <li key={cafe.ID}>
            {cafe.NAME} - {cafe.PRICE}원
          </li>
        ))}
      </ul>

      <h2>새로운 카페 추가</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={newCafe.name}
          onChange={(e) => setNewCafe({ ...newCafe, name: e.target.value })}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={newCafe.price}
          onChange={(e) => setNewCafe({ ...newCafe, price: e.target.value })}
        />
      </div>
      <button onClick={addCafe}>추가하기</button>
    </div>
  );
}

export default CafeAdd;
/*key={cafe[0]} = key={cafe.ID}
cafe[1] = cafe.NAME
cafe[2] = cafe.PRICE
*/
