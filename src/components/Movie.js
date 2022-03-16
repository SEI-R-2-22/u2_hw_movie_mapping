import React from 'react';
import Genres from './Genres'

function Movie(props) {
    return (
        <div className="movie-info">
            <img src={props.poster} />
            <p>{props.title}</p>
            <p>Released: {props.release_date}</p>
            <p>Overview: {props.overview}</p>

            {props.genre.map((genre) => (
                <Genres genre={genre.name}/>
            ))}

            
        </div>
    );
}

export default Movie;