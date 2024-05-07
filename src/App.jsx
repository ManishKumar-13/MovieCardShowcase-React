import React from 'react';
import MovieList from './components/MovieList';
import moviesData from './data/moviesData.json';
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
      <h1>Movies</h1>
      <MovieList movies={moviesData} />
    </div>
  );
}

export default App;
