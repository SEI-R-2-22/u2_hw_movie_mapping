import React from 'react'

export default function Genre(props) {
    let myColorVariable;
switch(props.movieGenre.name) {
  case 'Action': 
    myColorVariable = "blue"
    break
    case 'Science Fiction':
    myColorVariable = "green"
    break
    case 'Drama':
    myColorVariable = "red"
    break
    case 'Family':
    myColorVariable = "yellow"
    break
    case 'Comedy':
    myColorVariable = "orange"
    break
    case 'Horror':
    myColorVariable = "purple"
    break
    case 'Adventure':
    myColorVariable = "brown"
    break
    case 'Fantasy':
    myColorVariable = "grey"
    break
    case 'Animation':
    myColorVariable = "black"
    break
    case 'Crime':
        myColorVariable = "silver"
    break
  default:
    myColorVariable = 'pink'

}
  return (
    <div>
         <p style={{ backgroundColor: myColorVariable, color: 'rgb(255,255,255)' }} >{props.movieGenre.name}</p>
    </div>
  )
}

