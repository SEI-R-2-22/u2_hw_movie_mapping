import React from 'react'
import Genre from './Genre';
const Movie = (props) => {

  return(
    <div id='movie-div'>
      <h1>{props.original_title}</h1>
      <h3>{props.release_date}</h3>
      <img src={props.poster_path}/>
      <div id="overview"><p>{props.overview}</p></div>
      {props.genres.map((genre)=>(
        <Genre 
        genres={genre}
        /> )
      )}
    </div>
  )
}

export default Movie;