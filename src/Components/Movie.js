import Genre from "./Genre";


const Movie = (props) => {
    const movie = props.movie
    console.log(movie.genres)
    return (
      <div className="movie">
          <h1>{movie.title}</h1>
          <img src={movie.poster_path}/>
          <h2>{movie.overview}</h2>
          {movie.genres.map(genre =>{
              return <Genre genre={genre}/>
          })}
      </div>
    )
  };
  
  export default Movie;