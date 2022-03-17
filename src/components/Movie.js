import React from 'react'


export default function Movie(props)  {
    const movie = props.movie
        return (
          <div className="movie">
            <h1>{movie}</h1>
            <h3>Release Date: {props.release_date}</h3>
            <img src={props.poster}/>
            <h3>Overiew: {props.overview}</h3>
            



          </div>
        )
    }












// import React from 'react'

// export default function Movie(props) {
//   return (
//     <div>Movie
//   <li className="movie-item" id={props.name}>
//   <h3>Title: {props.title}</h3>
//   <h3>Release Date: {props.release}</h3>
//   <h3>Overview: {props.overview}</h3>
// </li>
// </div>
//   )
  
// }

