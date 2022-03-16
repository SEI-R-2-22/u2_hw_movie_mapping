import './styles/App.css'
import React from 'react'
import movies from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="allMovies">
        {movies.map((movie) => (
          <div key={movie.id} className="movieBox">
            <Movie movie={movie} />
            <div className="genreBox">
              {movie.genres.map((genre, index) => (
                <Genre genre={genre.name} key={genre.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
