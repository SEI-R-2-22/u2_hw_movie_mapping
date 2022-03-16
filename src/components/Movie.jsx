import React from 'react'

const Movie = (props) => {
return (
    <div>
     <h2>Title: {props.title}</h2>
     <h2>Release Date: {props.ReleaseDate}</h2>
     <h4>Overview: {props.Overview}</h4>
     <img src={props.image}/>
    </div>
)
};
export default Movie;