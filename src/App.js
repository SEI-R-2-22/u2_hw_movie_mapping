import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre.jsx'

console.log(movieArray)

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie) => (
        <div className='movie-genre'>
          <Movie 
            key={movie.title} 
            title = {movie.title} 
            releaseDate = {movie.release_date} 
            overview = {movie.overview} 
            image = {movie.poster_path}
          />
          {movie.genres.map((genre) => (
            <Genre genre = {genre.name}/>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App;