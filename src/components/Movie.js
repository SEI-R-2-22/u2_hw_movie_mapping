import React from 'react'
import Genre from './Genre.js'



export default function Movie(props) {
    const movie = props.movie
    return (
        <div className='movie'>
            <h1>{movie.title}</h1>
            <img src={movie.poster_path}/>
            <h2>{movie.overview}</h2>
            <h4>Released: {movie.release_date}</h4>
            {movie.genres.map(genre =>{
                return <Genre genre = {genre.name} />
            } )}
        </div>
      )
}

/* might not be the exact names in the array but it should look something like this */