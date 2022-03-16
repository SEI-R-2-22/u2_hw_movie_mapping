import React from 'react'

const Movie = (props) => {
  return (
    <div className="movie">
      <div className="title">{props.title}</div>

      <div className="poster">
        <img src={props.poster} alt={props.title}></img>
      </div>
      <div className="movie-info">
        <div className="release-date">Release Date: {props.releaseDate}</div>
        <br />
        <div className="overview">
          Synopsis: <br />
          {props.overview}
        </div>
      </div>
    </div>
  )
}

export default Movie
