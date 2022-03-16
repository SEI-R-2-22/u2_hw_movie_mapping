import './styles/App.css'
import React from 'react'
import Movie from './components/Movie'
import Genre from './components/Genre'
import movieArray from './data/movies.json'

const App = () => {
  console.log()
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <div>
          <Movie
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            overview={movie.overview}
            {...movie.genres.map((genre, index) => <Genre name={genre.name} />)}
          />
        </div>
      ))}
    </div>
  )
}

export default App
