import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>Movie List</h1>
        <p>Mouse over the move poster for more details!</p>
      </nav>
      <div className="movie-list">
        {movieArray.map((movie) => (
          <div className="movie-wrapper">
            <Movie
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              releaseDate={movie.release_date}
              overview={movie.overview}
            />
            <div className="genre-list">
              {movie.genres.map((genre) => (
                <Genre key={genre.id} name={genre.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
