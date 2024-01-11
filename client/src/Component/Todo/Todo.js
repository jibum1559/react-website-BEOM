import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePags from "./CreatePags";
import ListPage from "./ListPage";

function Todo() {
  //js로 state 상태 관리
  const Home = () => <div>Home</div>;
  const [actions, setActions] = useState([]);

  //생성하기
  const addAction = (newAction) => {
    setActions([...actions, newAction]);
  };

  //삭제하기
  const deleteAction = (id) => {
    setActions(actions.filter((action) => action.id !== id));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/ "
            element={<ListPage actions={actions} deleteAction={deleteAction} />}
          />
          <Route path="/create" element={<CreatePags action={addAction} />}>
            생성
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default Todo;
