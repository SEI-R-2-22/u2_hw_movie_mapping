const Movie = ({ title, releaseDate, overview, posterPath }) => {
  return (
    <div>
      <img src={posterPath} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p><b>Release Date</b>: {releaseDate}</p>
      <p><b>Overview</b>: {overview}</p>
    </div>
  )
};

export default Movie;