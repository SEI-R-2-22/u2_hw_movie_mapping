import Genre from "./Genre";


const Movie = (props) => {
    return (
        <div className="movie">
            <h1> {props.title} </h1>
            <p>Release Date: {props.release}</p>
            <img src={props.poster} alt="poster" />
            <p>{props.overview}</p>

            {props.gs.map((currentGenreVal) => (

                <Genre genre={currentGenreVal.name} />
            ))}
        </div>
    )
};

export default Movie