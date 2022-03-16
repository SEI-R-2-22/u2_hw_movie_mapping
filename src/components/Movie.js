import React from 'react'
import Genre from './Genre'



const Movie = (props) => {
  // const movie = props.movie
  // console.log(props.movie)


  console.log(props.movie)
  return (

    <div>

      <h1>{props.movie.original_title}</h1>
      <h1>{props.movie.release_date}</h1>
      <h1>{props.movie.overview}</h1>
      <img src={props.movie.poster_path}></img>
      {props.movie.genres.map((genre) => {
        return (
          <Genre genre = {genre}/>
        )
      })}


      
    </div>



  )}
export default Movie;