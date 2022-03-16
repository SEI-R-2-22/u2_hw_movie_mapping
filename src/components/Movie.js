import React from 'react'
import Genre from './Genre'

const Movie = (props) => {
  const genres = props.genres
  return (
    <div className="movie">
      <img src={props.image} alt={Movie.title}></img>
      <h3>{props.title}</h3>
      <h5>Release Date: {props.releaseDate}</h5>
      <h5>{props.overview}</h5>
      {genres.map((genre) => (
        <Genre genre={genre} key={genre.id} />
      ))}
    </div>
  )
}

export default Movie
