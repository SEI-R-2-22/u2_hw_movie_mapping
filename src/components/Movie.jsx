import React from 'react'

const Movie = (props) => {
    return (
        <div className='movie-list'>
            <img src={props.info.poster_path} alt="" />
            <h1>{props.info.title}</h1>
            <h3>Release Date: {props.info.release_date}</h3>
            <p>{props.info.overview}</p>
        </div>
    )
};

export default Movie;