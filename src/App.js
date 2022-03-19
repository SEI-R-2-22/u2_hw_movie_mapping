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
        <div className="movie-list">
          <div className="movie-cards">
            <Movie
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              overview={movie.overview}
              {...movie.genres.map((genres, index) => (
                <Genre
                  name={genres.name}
                  id={genres.id}
                  action={genres.action}
                />
              ))}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
