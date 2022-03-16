import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="whole">
      <h1>Movie List</h1>
      <div className="App">
        {movieArray.map((movie, index) => (
          <div className="movie">
            <Movie
              key={movie.id}
              title={movie.original_title}
              release={movie.release_date}
              overview={movie.overview}
              image={movie.poster_path}
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
