import Genre from "./Genre";

function Movie (props) {

    return (
        <div className = "movie">
            <h1> { props.title } </h1>
            <h2>Date of Release: { props.releaseDate }</h2>
            <h2>Overview: { props.overview }</h2>
            <img src={ props.img } alt={ props.title } />

            {props.genre.map((genre, index) => (
                <Genre genre = { genre } />
            ))}

        </div>
    )
}

export default Movie