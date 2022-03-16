import './styles/App.css'
import React from 'react'
import Movie from './components/Movies'
import Genre from './components/Genre'
import movies from './data/movies.json'

const App = () => {
  return (
    <div className = "App">
      <h1>Movie List</h1>
        <main>
          {movies.map((movie) => (
            <Movie 
              key = {movie.genre}
              title = {movie.title}
              release = {movie.release_date}
              poster = {movie.poster_path}
              overview = {movie.overview}
              gs = {movie.genres}
            />

          ))}

        </main>

    </div>
  )
}

export default App;