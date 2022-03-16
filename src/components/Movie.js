import React from "react";
import Genre from './Genre'

function Movie (props) {
    
    return (
        <div className="movie">
            
                <h1> {props.title}</h1>
                <h3>Release Date: {props.release_date}</h3>
                <p>Overview: {props.overview}</p>
                <img alt="poster" className="poster" src={props.poster}/>
                
                 {props.gs.map((currentGenre)=>{
                    return (
                    <Genre genre={currentGenre.name} />
                    )
                    })} 
                


        </div>

    )
}
export default Movie
