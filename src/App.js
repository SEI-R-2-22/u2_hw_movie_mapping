import './styles/App.css'
import React from 'react'

// Data
import movieArray from './data/movies.json'

// Custom Components
import Movie from './components/Movie';


const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="container">
        {movieArray.map((movie, index) => (
          <div>
            <Movie movie={movie} mNumber={index} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default App;