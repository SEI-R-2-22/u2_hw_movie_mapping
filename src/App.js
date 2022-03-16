import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movies.map((movie, index) => {
        return (
            <Movie movies={movie}/>
        )
       })}
    
    
    </div>
  )
};

export default App;

