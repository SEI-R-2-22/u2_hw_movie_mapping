import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from "./components/Movie.jsx"
import Genre from "./components/Genre.jsx"

console.log(movieArray)

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      { movieArray.map((movie) => (
        <div>
          <Movie
          key={movie.title}
          movie={movie} 
          />

          {movie.genres.map((genre) => (
          <div>
          <Genre 
            key={genre.id}
             genre={genre.name}
            />
          </div>
          ))}
        </div>
      ))}

    </div>
  );
};

export default App;