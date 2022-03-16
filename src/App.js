import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="boxes">
        {movieArray.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            genres={movie.genres}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  )
}

export default App
