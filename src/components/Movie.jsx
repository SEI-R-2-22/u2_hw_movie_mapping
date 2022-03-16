const Movie = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.releaseDate}</h4>
            <h4>{props.overview}</h4>
            <img src={props.image} alt='' />
            
        </div>
    )
}

export default Movie