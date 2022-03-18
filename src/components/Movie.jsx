import React from 'react'
import MovieGenre from './MovieGenre'

const Movie = (props) => {
  return (
  <div className= 'movie' id={props.id}>
    <img src={props.image}/>
    <h2>Title: {props.title}</h2>
    <h3>Release Date: {props.date}</h3>
    <h4>Overview: {props.overview}</h4>
    {props.genres.map((genre, index) => {
      return (
        <MovieGenre genre={genre} key={index} />
      )
    })}
  </div>
  )
  }

export default Movie;