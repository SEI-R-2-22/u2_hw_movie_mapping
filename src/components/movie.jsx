import React from 'react'
 
const Movie = (props) => {
   return (
     <div>
         <h1>{ props.movies.original_title }</h1>
         <h3>{props.release_date}</h3>
         <img src={props.poster_path}/>
         <p>{props.overview}</p>
    
     </div>
   )
 }

export default Movie;