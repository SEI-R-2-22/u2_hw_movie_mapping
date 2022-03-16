import React from 'react'

export default function Movie (props){

    return(
        <li>
            <h5>Phone: {props.title}</h5>
            <img src={`${props.poster_path}`} alt={props.id} />
            <h5>Release Date: {props.release_date}</h5>
            <h5>Overview: {props.overview}</h5>
        </li>
    )
}