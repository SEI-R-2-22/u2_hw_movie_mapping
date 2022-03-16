import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className='movie-list'>
        {
        movieArray.map((movie, index) => (
          <div className='movie-box'>
            <Movie 
            key={index}
            title={movie.title} 
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            overview={movie.overview}
            ></Movie>

            <div className='genres'>
              {movie.genres.map(genre => (
                <Genre genre={genre}></Genre>
              ))}
            </div>

           </div>
        ))
        }
      </div>
    </div>
  )
};

export default App;