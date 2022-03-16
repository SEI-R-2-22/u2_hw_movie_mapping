import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';



const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie) => (
          <Movie key={movie.id} 
          poster={movie.poster_path} 
          title={movie.original_title} 
          release_date={movie.release_date} 
          overview={movie.overview} 
          genre={movie.genres}
          />
      ))}
    </div>
  )
};

export default App;