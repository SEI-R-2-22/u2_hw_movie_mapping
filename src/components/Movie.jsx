import Genre from "./Genre";

const Movie = (props) => {
    return (
      <div>
        {/* // JSX for movie data from props here */}
        <h2>{props.movie.title}</h2>
        <p>Release date: {props.movie.release_date}</p> 
        <p>{props.movie.overview}</p>
        <img src={props.movie.poster_path}/>
        {props.movie.genres.map((genre, index) => (
            <Genre genre={genre} mNumber={index} />
          ))}
      </div>
    )
  };

export default Movie;