import React from 'react'
import Genre from './Genre';

function Movie(props) {
    console.log(props)
 return (
    <div>
       <h3>Title: { props.movies.original_title } </h3>
       <h3>Release Year: { props.movies.release_date }</h3>
       <h3>Overview: { props.movies.overview }</h3>
       <img src={ props.movies.poster_path }/>
       {props.movies.genres.map((genre, index) => {
          return (
            <Genre  genre={genre} key={index} />
          )
          
        })}
    </div>

  )
}

export default Movie
