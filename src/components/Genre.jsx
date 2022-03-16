import React from 'react'

const Genre = (props) => {
    let myColorVariable;
    switch(props.genre.name) {
        case 'Comedy':
            myColorVariable = 'yellow'
            break
        case 'Horror':
            myColorVariable = 'red'
            break
        case 'Romance':
            myColorVariable = 'pink'
            break
        case 'Drama': 
        myColorVariable = 'blue'
            break
        case 'Action': 
        myColorVariable = 'green'
            break
        case 'Animation':
            myColorVariable = 'purple'
            break 
        case 'Musical': 
        myColorVariable = 'aqua'
            break

        default: myColorVariable = 'silver'
            
    }
    return (
        <div>
            <p style={{ backgroundColor: myColorVariable}} >{props.genre.name} </p>
        </div>
    )
}
export default Genre;