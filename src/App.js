import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';



const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      
      {movieArray.map((movie) => (
      <Movie movie= {movie} key={movie.id}/>
      ))}
 
    </div>
  )
};

export default App;