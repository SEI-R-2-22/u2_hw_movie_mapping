import React from 'react'

export default function Movie (props){

    return(
        <li>
            <h3>{`${props.name}`}</h3>
            <img src={`${props.pic}`} alt={props.id} />
        </li>
    )
}