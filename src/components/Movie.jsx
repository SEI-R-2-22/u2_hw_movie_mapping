import React, { useState } from "react";
import Genres from './Genres';


const Movie = (props) => {
    
    const [hide, show] = useState(true)

    const [view, changeView] = useState("View Movie Details")
    
    const toggleClass = () => {
        let hideMovie = "Hide Movie Details"
        let viewMovie = "View Movie Details"
        show(!hide)
        if (hide) {
            changeView(hideMovie)
        } else {changeView(viewMovie)}
        
    }
    
    return (
        <div className="movie">
            <img src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
            <h4 onClick={toggleClass}>{view}</h4>
            <div className={hide ? "hide": null}>
                <h4>Release Date: {props.releaseDate}</h4>
                <p>{props.overview}</p>
                {props.genres.map((genre, index) => (
                <Genres
                key={genre.id}
                genre={genre.name}
                />
                ))}
            </div>
            
        </div>
    )
}

export default Movie