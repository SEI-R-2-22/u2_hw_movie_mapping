import React from "react";
import Genre from "./Genre";

const Movie = (props) => {
  return (
    <div className="movie" id={props.id}>
    <h1>{props.title} </h1>
    <img src={props.poster} alt="poster" />
    <p>Release Date: {props.release}</p>
    <div className='genDiv'>
      {props.genres.map((gen, i) => (
    <Genre 
    key={i}
    id={gen.id}
    genre={gen.name} />
    ))}
    </div>
    <p>{props.overview}</p>
    </div>
  );
};
export default Movie;
