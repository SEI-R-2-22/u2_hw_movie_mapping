import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List</h1>
      </header>
      {movieArray.map((movie, index) => (
        <div className="movie-profile">
          <Movie movie={movie} index={index}/>
        </div>
      ))}
    </div>
  )
};

export default App;