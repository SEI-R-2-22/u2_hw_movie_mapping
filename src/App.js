import Movie from './components/Movie'
import MovieGenre from './components/MovieGenre'
import movies from './data/movies.json'
import './styles/App.css'
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movies.map((movie, index) => {
        return (
          <div>
            <Movie
              // movies={movie}
              // key={index}
              key={movie.id}
              image={movie.poster_path}
              title={movie.original_title}
              date={movie.release_date}
              overview={movie.overview}
            />
          </div>
        )
      })}
    </div>
  )
}
export default App
