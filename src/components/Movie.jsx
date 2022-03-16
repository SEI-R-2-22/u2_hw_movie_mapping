import React from 'react'

const Movie = (props) => {
    return (
    <div>
      <h2>Title: {props.title}</h2>
      <h4>Release Date: {props.releaseDate}</h4>
      <h4>Overview: {props.overview}</h4>
      <img src={props.image}/>
    </div>
  )
}

export default Movie