import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {
  return (
    <div id="body">
      <h1 id="title">Movie List</h1>
      <div className="App" id="grid-box">
        {movieArray.map((movie) => (
          <div>
            <Movie
              genres={movie.genres}
              original_title={movie.original_title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
