import React from 'react'

 
function Movie(props) {  // definition of my component
   return (
     <div>
       <h2>{props.info.title}</h2>
       <h4>{props.info.release_date}</h4>
       <img src={props.info.poster_path}/>
       <h3>{props.info.overview}</h3>
       
     </div>
   )
 };


 // export the component
export default Movie; 