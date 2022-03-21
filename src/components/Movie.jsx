import React from 'react'
import Genre from './Genre'

const Movie = (props) => {
return (
<div className="movie">

     <h1>Title: {props.title}</h1>
     <h2>Release Date: {props.ReleaseDate}</h2>   
     <h4>Overview: {props.Overview}</h4>
     <img src={props.image}/>

     {props.gs.map((currentGenre)=>{
         return (
             <Genre genre={currentGenre.name} />
         )
         })}

</div>

)
        }
export default Movie;