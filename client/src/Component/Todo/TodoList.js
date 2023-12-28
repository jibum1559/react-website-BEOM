import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExCallBack() {
  const [count, setCount] = useState(0);
  const increaClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return <button onClick={increaClick}>좋아요 ♥ {count}</button>;
}

function TodoList() {
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  const addList = () => {
    if (newList.trim() !== '') {
      setList([...list, newList]);

      setNewList('');
    }
  };

  const removeList = (index) => {
    const updateList = [...list];
    updateList.splice(index, 1);
    setList(updateList);
  };

  const startEditing = (index, lists) => {
    setEditingIndex(index);
    setEditTodo(lists);
  };

  const saveEdit = () => {
    if (editTodo === undefined || editTodo.trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const updatedTodos = [...list];
    updatedTodos[editingIndex] = editTodo;
    setList(updatedTodos);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditTodo('');
  };

  useEffect(() => {
    document.title = `리스트추가 : ${list}`;
    console.log(`list가 추가됨 :`, list);
  }, [list]);

  return (
    <div>
      <h2>To do List</h2>
      <div className="listButton">
        <input
          type="text"
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
        />
        <button onClick={addList}>리스트 추가</button>
      </div>
      <div>
        <ul className="buttons">
          {list.map((lists, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                  />
                  <button onClick={cancelEdit}>취소</button>
                  <button onClick={saveEdit}>저장</button>
                </div>
              ) : (
                <div>
                  {lists}
                  <button onClick={() => removeList(index)}>삭제</button>
                  <button onClick={() => startEditing(index)}>수정</button>
                  <ExCallBack />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MiniApp() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default MiniApp;
