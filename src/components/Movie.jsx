import React from 'react';
import Genre from './Genre'

const Movie = (props) => {
  return (
    <div>
      <h1>Title: {props.movie.title}</h1>
      <img src={props.movie.image} />
      <p>Release Date: {props.movie.release_date}</p>
      <p>Overview: {props.movie.overview}</p>
      {props.movie.genres.map((genre,index) => (
        <Genre genre={genre}/>
      ))}
    </div>
  );
};

export default Movie;