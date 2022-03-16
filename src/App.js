import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>

      <div>
      {movieArray.map((movie) => (
        <Movie 
        key ={movie.original_title}
        poster_path={movie.poster_path}
        original_title ={movie.original_title}
        release_date ={movie.release_date}
        genres={movie.genres}
        overview ={movie.overview}
        />
        
      ))}
      </div>
    </div>
  )
};

export default App;