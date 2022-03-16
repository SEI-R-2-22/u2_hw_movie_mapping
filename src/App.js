import React from 'react'
import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  console.log(movieArray)
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <div>
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            overview={movie.overview}
            image={movie.poster_path}
            genres={movie.genres}
          />
          {movie.genres.map((genre, index) => (
            <Genre key={genre.id} name={genre.name} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
