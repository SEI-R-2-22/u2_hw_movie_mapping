import React from 'react'

const Movie = (props) => {
  return (
    <div>
      <img src={props.image} />
      <h3>
        {props.title} ({props.release})
      </h3>
      <p>{props.overview}</p>
    </div>
  )
}

export default Movie
