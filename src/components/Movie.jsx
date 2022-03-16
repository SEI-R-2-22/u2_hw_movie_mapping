import React from 'react'

const Movie = (props) =>{
  return(
    <div>
      <h3>{props.title}</h3>
      <img src={props.poster_path} alt="movie poster"></img>
      <p>{props.release_date}</p>
      <p>{props.overview}</p>

    </div>
  )
}


export default Movie
