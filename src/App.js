import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1 className='topPart'>Movie List</h1>
      {movieArray.map((movie, index) => (
        <div>
          
          <Movie title={movie.title} release={movie.release_date} image={movie.poster_path} overview={movie.overview}/>
          {movie.genres.map((genre, index) => (

            <Genre genrePass={genre.name}/>

        ))}
      </div>
      ))}
    </div>
  
  )};

export default App;