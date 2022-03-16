import React from 'react';



function Movie(props) {

    return (
        <div>
            <li className='movie-list'>
                <img src={props.poster}/>
                <h3 style={{ backgroundColor: 'darkslategray', color: 'rgb(255,255,255)' }}>{props.title}</h3>
                <h5>Release date: {props.release}</h5>
                <p>{props.overview}</p>
            </li>
        </div>
    );
}

export default Movie;
