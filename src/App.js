import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Genre from './components/Genres'
import Movie from './components/Movies'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="movie-list">
        {movieArray.map((movie, index) => (
          <div className="movie-card">
            <Movie
              key={index}
              title={movie.title}
              poster={movie.poster_path}
              release={movie.release_date}
              overview={movie.overview}
            />

            {movie.genres.map((genre, index) => (
              <Genre key={index} genre={genre.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
