

const Movie = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <h3>Release Date: {props.releaseDate}</h3>
      <img src={props.poster} alt="poster"></img>
      <p>{props.overview}</p>
    </div>
  )
}

export default Movie