import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genres'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
        {movieArray.map((movie, index) => (
          <Movie
            key={index}
            title={movie.original_title}
            releaseDate={movie.release_date}
            overview={movie.overview}
            img={movie.poster_path}
            genres={movie.genres}
          />
        ))}
      </div>
    </div>
  )
}

export default App
