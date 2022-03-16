const Movie = (props) => {
  return (
    <div className='movieBox' >
      <img src={props.movie.poster_path} alt=""></img>
      <h3>{props.movie.title}</h3>
      <h4>Release Date: {props.movie.release_date}</h4>
      <h5>Overview</h5>
      <p>{props.movie.overview}</p>  
    </div>
  )
}

export default Movie