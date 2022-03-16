import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Genre from './components/Genre'
import Movie from './components/Movie'


const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
        {movieArray.map((movie) => (


          <Movie
            key={movie.id}
            title={movie.title}
            release={movie.release_date}
            poster={movie.poster_path}
            overview={movie.overview}
            gs={movie.genres}
          />
        ))}
      </div>
    </div>
  )
}



export default App