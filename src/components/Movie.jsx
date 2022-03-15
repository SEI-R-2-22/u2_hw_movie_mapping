import Genre from "./Genre"

const Movie = (props) => {
  const movie = props.movie
  console.log(movie.genre)
  return(
    <div className = 'movie'>
      <h2>{movie.title}</h2> 
      <img src={movie.poster_path}/>
      <div className = 'details'>
        <h3>{movie.overview}</h3>
        {movie.genres.map(genre =>{
          return <Genre genre={genre.name}/>
        })}
      </div>
    </div>
  )
}
export default Movie