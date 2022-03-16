import './styles/App.css'
import React from 'react'
import movies from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Movie movie={movie} />
          {movie.genres.map((genre, index) => (
            <Genre genre={genre.name} key={genre.id} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
