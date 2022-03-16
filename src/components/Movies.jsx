const Movie = (props) => {
   return (
    <div className="movies">
    
      <h2>{props.title}</h2>
      <img className="image" src={props.poster} />
      <p>
      Release Date: {props.release}
      <br />
      <br />
      Overview: {props.overview}
    </p>
  </div>
   )
 };

export default Movie;