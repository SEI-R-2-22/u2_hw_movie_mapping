import React from "react"
import Genre from "./Genre";

const Movie = (props) => {
    return (
        <div>
            {/* <div>{props.movie.backdrop_path}</div> */}
            <h1>{props.movie.title}</h1>
            <div>{props.movie.release_date}</div>
            <div>{props.movie.overview}</div>
            {props.movie.genres.map((genre) => {
                return (
                    <Genre genre={genre} />

                )
            })}
        </div>
    )
};

export default Movie