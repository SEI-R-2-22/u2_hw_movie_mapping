import React from 'react'




const Movie = (props) => {
    
    return (

        

        
            <div>
                
                
                    
                <h1>{props.title}</h1>
                <h5>Released: {props.release}</h5>
                <img src={props.image}></img>
                <p>{props.overview}</p>
                
            </div>

        

    )


}

export default Movie