
const Movie = (props) => {
    
    return (
        <div className="Movie" key={props.key}>
            <img src={props.poster_path} alt="movie poster" />
            <h4>{props.title}</h4>
            {/* <h6>{props.release_date}</h6>
            <p>{props.overview}</p> */}
            
        </div>
    )
}
export default Movie