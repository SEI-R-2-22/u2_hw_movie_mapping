import Genre from "./Genre"

const Movie = (props) => {
    return (
        <div key={props.index}>
            <img className="movie-image" src= {props.movie.poster_path} alt="Movie Image" />
            <div className ="overlay">
                <h2 className="movie-title">{ props.movie.title }</h2>
                <h4 className="release-date">Release Date: {props.movie.release_date}</h4>
                <h5 className="overview">{props.movie.overview}</h5>
                {props.movie.genres.map((genre, index) => (
            <Genre movieGenre={genre} index={index}/>
          ))}
            </div>
        </div>
    )
}

export default Movie