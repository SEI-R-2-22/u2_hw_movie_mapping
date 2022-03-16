import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie.js'


const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
          {movieArray.map((movie, index) => (
            <div className='individualMovie'>
              <Movie 
                genre={movie.genres}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                overview={movie.overview}
                />
            </div>
          ))}
    </div>
  )
}
export default App;