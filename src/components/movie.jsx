import React from 'react'


const Movie = (props) => {
   return (
     <div>
        <h1>{ props.movie.original_title }</h1>
        <h3>{props.movie.release_date}</h3>
        <img src={props.movie.poster_path}/>
        <p>{props.movie.overview}</p> 

     </div>
   )
 }

export default Movie;