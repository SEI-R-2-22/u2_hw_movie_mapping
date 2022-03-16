import './styles/App.css'
import React from 'react'
import movies from './data/movies.json'
import Movie from './components/Movie';


const App = () => {
  console.log(movies)
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movies.map((movie, index) => {
        return (
          <Movie movies={movie} key={index}/>
        )
      
      })}
      
    </div>
  )
};

export default App;