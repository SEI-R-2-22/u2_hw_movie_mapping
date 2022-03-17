import React from 'react'

export default function Genre(props) {
    let myColorVariable;
    switch (props.genre.name) {
        case 'Action':
            myColorVariable = 'maroon'
            break
        case 'Romance':
            myColorVariable = 'purple'
            break
        case 'Fantasy':
            myColorVariable = 'green'
            break
        case 'Adventure':
            myColorVariable = 'lime'
            break
        case 'Thriller':
            myColorVariable = 'magenta'
            break
        case 'Comedy':
            myColorVariable = 'yellow'
            break
        case 'Science Fiction':
            myColorVariable = 'turquoise'
            break
        default:
            myColorVariable = 'violet'

    }
    return (
        <div style={{ backgroundColor: myColorVariable, color: '#000000' }} >{props.genre.name}</div>
    )
}
