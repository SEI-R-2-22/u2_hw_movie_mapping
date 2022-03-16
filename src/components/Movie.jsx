const Movie = (props) => {
    return (
      <div>
        {/* // JSX for movie data from props here */}
        <h2>{props.movie.title}</h2>
        <p>Release date{props.movie.release_date}</p> 
        <p>Overview {props.movie.overview}</p>
        <img src={props.movie.poster_path}/>
      </div>
    )
  };

export default Movie;