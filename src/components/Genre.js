import React from 'react'

const Genre = (props) => {
    console.log(props.genre)
    let myColorVariable;
    switch(props.genre) {
        case 'Action':
            myColorVariable = 'blue'
            break
        case 'Adventure':
            myColorVariable = 'green'
            break
        case 'Fantasy':
            myColorVariable = 'black'
            break
        case 'Crime':
            myColorVariable = 'grey'
            break
        case 'Thriller':
            myColorVariable = 'purple'
            break
        case 'Science Fiction':
            myColorVariable = 'light grey'
            break
        case 'Horror':
            myColorVariable = 'black'
            break
        case 'Animation':
            myColorVariable = 'yellow'
            break
        case 'Comedy':
            myColorVariable = 'green'
            break
        case 'Drama':
            myColorVariable = 'dark blue'
            break
        case 'Family':
            myColorVariable = 'white'
            break
        case 'Music':
            myColorVariable = 'orange'
            break
        case 'Mystery':
            myColorVariable = 'dark grey'
            break
        case 'History':
            myColorVariable = 'pink'
            break
        case 'Romance':
            myColorVariable = 'red'
            break
        case 'War':
            myColorVariable = 'black'
            break
        case 'TV Movie':
            myColorVariable = 'blue'
            break
        case 'Western':
            myColorVariable = 'brown'
            break
        case 'Documentary':
            myColorVariable = 'blue'
            break
        default:
            myColorVariable = 'white'
    }
    return (
        <div className="Genre">
            <p style={{backgroundColor: 'darkslateblue', color: myColorVariable}} >{props.genre.name}</p>    
        </div>
    )
}

export default Genre