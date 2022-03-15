import './styles/App.css'
import React from 'react'
import Movie from './components/Movie'
import Genre from './components/Genre'
import movieArray from './data/movies.json'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <div key={index} className="movie-wrapper">
          <Movie
            title={movie.title}
            releaseDate={movie.release_date}
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
          {movie.genres.map((genre) => (
            <Genre key={genre.id} name={genre.name} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
