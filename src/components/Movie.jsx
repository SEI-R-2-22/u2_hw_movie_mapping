import {render} from "react-dom"
function Movie(props) {
    return (
        <div>
            <h2>{ props.film.original_title}</h2>
            <p>{props.film.release_date}</p>
            <img src={ props.film.poster_path}/>
            <p>{props.film.overview}</p>
        </div>
    )
}
export default Movie