

const Movie = (props) => {
  return (
    <div >
      <img src={props.movie.poster_path} alt=""></img>
      <h3>{props.movie.title}</h3>
      <h4>Release Date: {props.movie.release_date}</h4>
      <details>
        <summary>Overview</summary>
          <p>{props.movie.overview}</p>
      </details>    
    </div>
  )
}

export default Movie