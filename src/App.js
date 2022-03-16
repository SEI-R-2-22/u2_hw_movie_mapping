import './styles/App.css'
import React from 'react'
import movies from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      {movies.map((movie) => (
        <div className="Movies">
          <Movie
            key={movie.original_title}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            genres={movie.genres}
          />
          {movie.genres.map((genre) => (
            <Genre genres={genre} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
