import React from 'react'
import Genre from './Genre';
 
const Movie = (props) => {
   return (
     <div>
       <h2>{props.info.title}</h2>
       <h4>{props.info.release_date}</h4>
       <img src={props.info.poster_path}/>
       <h3>{props.info.overview}</h3>
       {props.info.genres.map((genre) => (
           <Genre genre={genre} key={genre.name}/>
        ))}
     </div>
   )
 };

export default Movie;