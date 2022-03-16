import React from 'react'


let myColorVariable;
// let backgroundColor = object[props.genre]

const Genre = (props) => {
    switch(props.genre) {
    case 'Action': 
        myColorVariable = 'crimson'
        break
    case 'Adventure': 
        myColorVariable = 'coral'
        break
    case 'Fantasy': 
        myColorVariable = 'yellow'
        break
    case 'Crime': 
        myColorVariable = 'lightgreen'
        break
    case 'Thriller': 
        myColorVariable = 'lightblue'
        break
    case 'Science Fiction': 
        myColorVariable = 'violet'
        break
    case 'Horror': 
        myColorVariable = 'black'
        break
    case 'Animation': 
        myColorVariable = 'skyblue'
        break
    case 'Comedy': 
        myColorVariable = 'hotpink'
        break
    case 'Drama': 
        myColorVariable = 'dodgerblue'
        break
    case 'Family': 
        myColorVariable = '#33dd55'
        break
    case 'Music': 
        myColorVariable = 'deeppink'
        break
    case 'Mystery': 
        myColorVariable = 'gold'
        break
    case 'History': 
        myColorVariable = 'greenyellow'
        break
    case 'Romance': 
        myColorVariable = 'indianred'
        break
    case 'War': 
        myColorVariable = 'lightcyan'
        break
    case 'TVMovie': 
        myColorVariable = 'lightseagreen'
        break
    case 'Western': 
        myColorVariable = 'mediumaquamarine'
        break
    case 'Documentary': 
        myColorVariable = 'palevioletred'
        break

    default:
        myColorVariable = 'white'
    }

    return (
    <div>
        <p style={{ backgroundColor: '', color: myColorVariable}} >{props.genre}</p>
    </div>
    )
}

export default Genre