import React from 'react'

const Movie = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <h2>{props.genre}</h2>
        <h3>{props.release_date}</h3>
        <h3>{props.overview}</h3>
        <img src = {props.poster_path} />
        </div>

)}

export default Movie 