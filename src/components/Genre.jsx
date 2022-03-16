import React from 'react'

const Genre = (props) => {

    let myColorVariable;
    switch (props.genre) {
        case 'Action':
            myColorVariable = 'red'
            break
        case 'Adventure':
            myColorVariable = 'orange'
            break
        case 'Crime':
            myColorVariable = 'brown'
            break
        case 'Thriller':
            myColorVariable = 'yellow'
            break
        case 'Family':
            myColorVariable = 'pink'
            break
        case 'History':
            myColorVariable = 'lavender'
            break
        case 'Animation':
            myColorVariable = 'goldenrod'
            break
        case 'Comedy':
            myColorVariable = 'green'
            break
        case 'Drama':
            myColorVariable = 'scarlet'
            break
        case 'Science Fiction':
            myColorVariable = 'blue'
            break
        case 'TV Movie':
            myColorVariable = 'purple'
            break
        case 'War':
            myColorVariable = 'gray'
            break
        case 'Horror':
            myColorVariable = 'orchid'
        default:
            myColorVariable = 'white'
    }

    return (

        <div>

            <p style={{ backgroundColor: myColorVariable }}>{props.genre}</p>

        </div>

    )
}

export default Genre;