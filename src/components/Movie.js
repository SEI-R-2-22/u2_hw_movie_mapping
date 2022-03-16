import React from 'react';
import Genre from './Genre'

function Movie(props) {

  

  return (
    <div className="Movie" id={props.id}>
      <img src={props.posterUrl} className="movie-img" alt="poster" />
      <div className="movie-title">{props.title}</div>

      <div className="movie-genres-container">
        {props.genres.map((g, i) => (
      
          <Genre key={props.id + "-" + g.name} 
            id={props.id + "-" + g.name}
            genre={g.name} 
          />
        ))} 
      </div>
    </div>
  );
}

export default Movie;