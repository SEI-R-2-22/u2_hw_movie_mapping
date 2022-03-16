const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title + "poster"}></img>
      <h3>{props.releaseDate}</h3>
      <p>{props.overview}</p>
    </div>
  )
}

export default Movie