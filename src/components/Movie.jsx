// import React from 'react'
 
// const Movie = (props) => {
function Movie(props) {
   return (
     <div>
       <h3>Title: { props.movie.title }</h3>
       <h5>Release Date: { props.movie.release_date }</h5>
       <h5>Overview: { props.movie.overview }</h5>
       <img src={ props.movie.poster_path } alt="poster"/>
     </div>
   )
 };

export default Movie;