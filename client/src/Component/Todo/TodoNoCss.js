import React, { useState, useEffect, useCallback } from 'react';

function TodoNoCss() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [count, setCount] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
    setCount((count) => count + 1);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setCount((count) => count - 1);
  };

  const startEditing = (index, todo) => {
    setEditingIndex(index);
    setEditTodo(todo);
  };

  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditTodo('');
  };

  useEffect(() => {
    document.title = `할일 갯수 : ${count}`;
  }, [count]);

  return (
    <div>
      <h2>To do List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={saveEdit}>저장</button>
                <button onClick={cancelEdit}>취소</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => startEditing(index, todo)}>
                  수정하기
                </button>
                <button onClick={() => removeTodo(index)}>삭제하기</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoNoCss;
