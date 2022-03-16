import MovieGenres from "./MovieGenres"

function IndividualMovie(props) {
    return (
        <div>
            <h1>{ props.movie.title}</h1>
            <h3>{props.movie.release_date}</h3>
            <img src={ props.movie.poster_path}/>
            <p>{props.movie.overview}</p>
            {props.movie.genres.map((genre) => (
                <MovieGenres genre = {genre}/>
            ))}
        </div>
    )
}
export default IndividualMovie