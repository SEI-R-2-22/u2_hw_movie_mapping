import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <main>
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
      </main>
     
    </div>
  )
};

export default App;