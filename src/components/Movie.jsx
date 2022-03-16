import React from 'react'
import Genre from './Genre'
 
const Movie = (props) => {
   return (
     <div className="movie-wrapper">
       <div className="title">
       {props.title} </div>
       
       <img src={props.posterPath}></img>
       <div className="poster-genres">
      {props.genres.map((genre) => (
        <Genre key={genre.id} genreType={genre.name} />
      ))
      
      }
      </div>

     </div>
   )
 };

export default Movie;