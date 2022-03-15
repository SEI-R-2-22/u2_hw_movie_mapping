import './styles/App.css'
import React from 'react'
import movies from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  )
}
export default App
