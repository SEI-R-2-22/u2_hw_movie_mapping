import React from 'react'
import Genre from './Genre'

const Movie = (props) => {

    return (
        <div>
            <h2>{ props.film.original_title }</h2>
            <p>{ props.film.release_date }</p>
            <p>{ props.film.overview }</p>
            <img src={ props.film.poster_path } alt='' />
            {props.film.genres.map((genre) => {
                return (
                    <Genre genre={genre.name} />
                )
            })}
        </div>
    )

}

export default Movie