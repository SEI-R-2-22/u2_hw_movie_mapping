import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'


const App = () => {

  return (
    <div>
    {movieArray.map((movie, index) => (
      <div>
          <Movie title = {props.title} release date= {props.release_date} overview= {props.overview} img= {props.poster_path}></Movie>
  
          {movie.genres.map((genre, index) => ( <Movies
           genre= {props.name}/>
          
           )
            </div>
          ))}
  </div>

export default App;