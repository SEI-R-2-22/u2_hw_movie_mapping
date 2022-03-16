import React from 'react'

const Movie = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
           
      <img src={props.image} alt="poster"></img>
      <div className="info">(
      {props.overview} Relased in {props.releasedate})</div> 
    </div>
  )
}

export default Movie
