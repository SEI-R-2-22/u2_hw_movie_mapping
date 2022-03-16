import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';

const App = () => {

  

  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
      {movieArray.map((movie)=> (
     
        <Movie 
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
          poster={movie.poster_path}
        />



      )

        )} 
      </div>

    </div>
  )
};

export default App;