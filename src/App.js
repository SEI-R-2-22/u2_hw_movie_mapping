import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {
  console.log(movieArray[0])
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
          image={movie.poster_path}
          genres={movie.genres}
        />
      ))}
    </div>
  )
}

export default App
