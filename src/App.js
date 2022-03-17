import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie) => (
        <div>
          <Movie info={movie} key={movie.id} />
          
          {movie.genres.map((genre) => (
            <Genre genre={genre} />
          ))}
        </div>
      ))}
    </div>
  )
};

export default App;