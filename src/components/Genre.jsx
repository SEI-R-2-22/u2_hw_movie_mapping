import React from "react";

function Genre(props) {
    let color;
    switch(props.genre.name) {
        case 'Crime':
        color = 'orange'
        break

        case 'Thriller':
            color = 'red'
            break
        case 'Action':
            color = 'blue'
            break
        case 'Science Fiction':
            color = 'yellow'
            break
        case 'Horror':
            color = 'green'
            break
        case 'Comedy':
            color = 'pink'
            break
        case 'Adventure':
            color = 'brown'
            break
        default:
            color = 'gold'
    }


    return (
        <div>
            <p style={{backgroundColor: color}}>{props.genre.name}</p>
        </div>
    )

}

export default Genre