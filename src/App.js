import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie.js'
import Genre from './components/Genres.js'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((Movie, index) => (
        <div>
          <Movie 
          key= {Movie.title}
          title= {Movie.title}
          genre= {Movie.genre}
          date= {Movie.release_date}
          overview= {Movie.overview}
          poster = {Movie.poster_path}
          />
        </div>
      ))}
    </div>
  )
};

export default App;