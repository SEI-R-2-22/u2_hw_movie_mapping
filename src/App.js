import './styles/App.css'
import React from 'react'

// Data
import movieArray from './data/movies.json'

// Custom Components
import Movie from './components/Movie';
// import Genre from './components/Genre';

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <div>
          <Movie movie={movie} mNumber={index} />
          {/* {movie.genres.map((genre, index) => (
            <Genre genreName={genre} mNumber={index} />
          ))} */}
        </div>
      ))}
    </div>
  )
};

export default App;