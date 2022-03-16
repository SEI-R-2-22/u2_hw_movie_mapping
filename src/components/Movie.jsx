import Genre from './Genres'

const Movie = (props) => {
  // console.log(props)
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.overview}</p>
      <img src={props.img}/>
      {props.genres.map((genre, index) => (
          <Genre genre={genre} />
        ))}
    </div>
  )
}


export default Movie