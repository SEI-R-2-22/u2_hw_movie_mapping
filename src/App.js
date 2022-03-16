import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

console.log(movieArray)

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>

      {movieArray.map((movie, index) => (
         < Movie movie={movie} />
      ))} 
    </div>
  )
};

export default App;



