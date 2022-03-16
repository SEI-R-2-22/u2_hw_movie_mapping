import React, { useState } from 'react';
import Genres from './Genres'

function Movie(props) {
    
    return (
        <div className="movie-info">
            <img className="poster" src={props.poster} alt="poster"/>
            <div className="movie-text">
                <p>{props.title}</p>
                <p>Released: {props.release_date}</p>
                
            </div>
            <div className="overview-genre">
                <p className="overview">Overview: {props.overview}</p>            
                <div className="genre-label">
                    {props.genre.map((genre) => (
                        <Genres genre={genre.name}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Movie;