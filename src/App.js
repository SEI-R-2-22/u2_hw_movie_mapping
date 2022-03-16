import './styles/App.css'
import React from 'react'
import movies from './data/movies.json'
import Movie from './components/Movie';
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movies.map((movie)=>
      <Movie
      key={movies.genre}
      title={movie.title}
      release_date={movie.release_date}
      overview={movie.overview}
      poster={movie.poster_path}
      gs={movie.genres}
      />
      
      
      )}
      
    </div>
  )
};

export default App;