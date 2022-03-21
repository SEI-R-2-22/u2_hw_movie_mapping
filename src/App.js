import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie.jsx'
import Genre from './components/Genre.jsx'

console.log(movieArray)

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      { movieArray.map((movie) => (
        <div>
        <Movie film={movie} key={movie.id}/>

        {movie.genres.map((genre) => {
          <Genre genre={genre} key={genre.id}/>
        })}
        </div>
      ))}

    </div>
  )
};

export default App;