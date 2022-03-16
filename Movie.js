

const Movie = (props) => {
    const movie = props.movie
    return (
      <div className="movie">
          <h1>{movie.title}</h1>
          <img src={movie.poster_path}/>
          <h2>{movie.overview}</h2>
          {movie.genres.map(genre =>{
              return <h3 className="genre">{genre.name}</h3>
          })}
      </div>
    )
  };
  
  export default Movie;