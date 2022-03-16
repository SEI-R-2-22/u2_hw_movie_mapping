import React from 'react'
import Genre from './Genre.js'

const Movie = (props) => {
    return (
        <div>
            {props.genre.map((movieGenre) => {
                return (
                    <Genre
                    genre={movieGenre.name}
                    />
                )
            })}
            <img src = {props.poster_path} alt = ''/>
            <h3>{props.title}</h3>
            <h5>Release Date: {props.release_date}</h5>
            <h5>{props.overview}</h5>
            {/* <h5>{props.genres}</h5> */}
        </div>
    )
}

export default Movie