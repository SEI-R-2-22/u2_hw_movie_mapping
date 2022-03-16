import './styles/App.css'
import React from 'react'
import movieArray from "./data/movies.json"
import Movie from './components/Movie';

const App = () => {
  console.log(movieArray)
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className='movie-list'>
        {movieArray.map((movie, index) => (
          <div key={movie.id}>
            <Movie
            title={movie.title}
            releaseDate={movie.release_date}
            image={movie.poster_path}
            overview={movie.overview}
            genres={movie.genres}
            />
          </div>          
      ))}
      </div>

      
      
    </div>
  )
}

export default App;