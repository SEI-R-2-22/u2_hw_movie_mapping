import React from "react";

function Movie(props) {
    return (
    <div>
        <h2>{props.film.original_title}</h2>
        <p>{props.film.release_date}</p>
        <p>{props.film.overview}</p>
        <img src={props.film.poster_path} alt=""></img>

    </div>

    )}

export default Movie;