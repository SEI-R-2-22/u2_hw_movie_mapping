import React from 'react'
import Genre from './Genre';
 
const Movie = (props) => {
   return (
    
         <ul>
            <li><img src={props.poster_path}/></li>
            <li>{props.original_title}</li>
            {props.genres.map((genre) => (
                <Genre genres={genre.name}/>
            ))}
            <li>{props.release_date}</li>
            <li>{props.overview}</li>
          </ul>
    
   )
 };

export default Movie;