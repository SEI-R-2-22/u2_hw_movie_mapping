import './styles/App.css'
import React from 'react'
import movies from './data/movies.json'
import Movie from './components/Movie'


const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movies.map((movie, index) => (
        <Movie
        key = { index }
        title = { movie.title }
        releaseDate = { movie.release_date }
        img = { movie.poster_path }
        overview = { movie.overview }
        genre = { movie.genres }
      />
      ))}
    </div>
  )
};

export default App;