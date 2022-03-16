import React from 'react'

export default function Movie (props){

    return(
        <li>
            <img src={`${props.poster_path}`} alt={props.id} />
        </li>
    )
}