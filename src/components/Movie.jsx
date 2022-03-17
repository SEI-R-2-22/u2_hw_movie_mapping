import React from 'react'

 
function Movie(props) {  // definition of my component
   return (
     <div>
       <h2>{props.film.title}</h2>
       <h4>{props.film.release_date}</h4>
       <img src={props.film.poster_path}/>
       <h3>{props.film.overview}</h3>
       
     </div>
   )
 };


 // export the component
export default Movie; 