import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="Main">
        {movieArray.map((movie, index) => (
          <div>
            <Movie
              key={movie.id}
              title={movie.title}
              releasedate={movie.release_date}
              overview={movie.overview}
              image={movie.poster_path}
            />

            {movie.genres.map((genre, index) => (
              <Genre genre={genre.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
