import React from 'react'

export default function Movie (props){

    return(
        <div className='pic'>
            <img src={`${props.pic}`} alt=""/>
        </div>
    )
}