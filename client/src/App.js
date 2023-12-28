import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import MovieList from './Component/Moive/MovieList';
import NumberGuessingGame from './Component/Game/NumberGuessingGame';
import Quiz from './Component/Game/Quiz';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Todo from './Component/Todo/Todo';
import WeatherSearch from './Component/Weather/WeatherSearch';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MovieList />} />
            <Route path="/todos" element={<Todo />} />
            <Route
              path="/numberGuessingGame"
              element={<NumberGuessingGame />}
            />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/weather" element={<WeatherSearch />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// App.js 활용해서 -> react-router-dom Link
