import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import IndividualMovie from './components/IndividualMovie';
import MovieGenres from './components/MovieGenres';
const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <IndividualMovie movie = {movie} key={movie.id}/>
      ))}
      </div>
  )
};

export default App;

