import React from 'react'
import Genre from './Genre';
 
const Movie = (props) => {
   return (
     <div className='movie-list' id='props.name'>
         <div className='information'>
            <div>
                {props.genre.map((currentGenre)=>{
                       return (
                       <Genre genre={currentGenre.name} />
                       )
                       })}
            </div>
         <img src={props.poster} alt={props.title}></img>
            <h2>Title: {props.title}</h2>
            <h5>Release Date: {props.release}</h5>
            <p>Overview: {props.overview} </p>
         </div>    

     </div>
   )
 };

export default Movie;