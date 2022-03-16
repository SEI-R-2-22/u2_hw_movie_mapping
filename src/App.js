import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';
import Genre from './components/Genre';
console.log(movieArray)
const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>

    </div>
  )
};

export default App;