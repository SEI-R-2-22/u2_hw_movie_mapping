import React from 'react'

const Movie = (props) => {

  return (
    <div className='movieList'>
      <img src={props.poster_path} alt={props.original_title}></img>
      <h1>{props.original_title}</h1>
      <h2>{props.release_date}</h2>
      <h2>{props.overview}</h2>
    </div>
  )
}

export default Movie