import React from "react";

const Movie = (props) =>{

    let pUrl = `url(${props.poster})`
    return(
    <div>
        <div className="mEntry" style={{ backgroundColor: pUrl}}>
            <img alt ="poster" className="poster" src ={props.poster}/><div className="title">{props.title}</div>
            <div className="poster"></div>
            <div className="rDate">{props.rDate}</div>
            <div className="overview">{props.overview}</div>
        </div>
    </div>)
}

export default Movie