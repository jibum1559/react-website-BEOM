import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import NumberGuessingGame from './Component/Game/NumberGuessingGame';
import Quiz from './Component/Game/Quiz';
import TodoList from './Component/Todo/TodoList';
import MovieList from './Component/Moive/MovieList';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="conteiner mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MovieList />} />
            <Route
              path="/numberGuessingGame"
              element={<NumberGuessingGame />}
            />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// App.js 활용해서 -> react-router-dom Link
