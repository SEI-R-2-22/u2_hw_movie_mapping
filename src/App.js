import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genres from './components/Genres'

const App = () => {
  console.log(movieArray)
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="movieContainer">
        {movieArray.map((movie, index) => (
          <div key={movie.id} className="movieDiv">
            <Movie
              className="singleMovie"
              title={movie.title}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
            />
            <div className="genreMain">
              {movie.genres.map((genre, index) => (
                <Genres name="genre" genre={genre.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
