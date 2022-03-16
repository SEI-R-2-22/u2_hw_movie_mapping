import React from 'react'
import Genre from './Genre'


const Movie = (props) => {
    const movie = props.movie
        return (
          <div className="movie">
            <h1>{movie}</h1>
            <p>Release Date: {props.release_date}</p>
            <img src={props.poster} alt='poster' />
            <p>{props.overview}</p>
            {props.gs.map((genre) => (
              <Genre 
              genre={genre.name}
              />
            ))}



          </div>
        )
    }
export default Movie
