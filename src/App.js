import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <div>
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  )
};

export default App;