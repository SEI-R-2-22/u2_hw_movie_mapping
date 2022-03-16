import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/movie.jsx'
import Genre from './components/genre.jsx'

console.log(movieArray)

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
      {movieArray.map((movie, index) => (
        <div key={movie.id}>
          <Movie
            poster_path={ movie.poster_path }
            title={ movie.title }
            release_date={ movie.release_date }
            overview={ movie.overview }
          />

          {movie.genres.map((genre, index) => (
            <div key={genre.id}>
              <Genre
                genre={ movie.genre }
            />
            </div>
          ))}

        </div>
      ))}
      </div>
    </div>
  )
};


export default App;