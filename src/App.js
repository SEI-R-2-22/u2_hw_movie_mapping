import React from 'react'
import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

export default function App() {
  return (
    <div>
      {movieArray.map((movie, index) => (
        <Movie movie={movie} />
      ))}
    </div>
  )
}
