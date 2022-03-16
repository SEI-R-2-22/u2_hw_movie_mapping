import React from 'react'

const Movie = (props) => {



    return (
        <div>
            <img src={props.poster} />
            <h3>Title: {props.title}</h3>
            <h3>Release Date: {props.releaseDate}</h3>
            <h3>Overview: {props.overview}</h3>

        </div>
    )
};

export default Movie;