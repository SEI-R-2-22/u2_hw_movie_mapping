import React from 'react'

export default function Genre(props) {
  let myColorVariable;
  switch(props.genre.name) {
    case 'Action': 
      myColorVariable = 'red'
      break
    case 'Adventure': 
      myColorVariable = 'blue'
      break
    case 'Fantasy': 
      myColorVariable = 'purple'
      break
    case 'Comedy': 
      myColorVariable = 'green'
      break
    case 'Family': 
      myColorVariable = 'yellow'
      break
    case 'Drama': 
      myColorVariable = 'tan'
      break
    case 'Science Fiction': 
      myColorVariable = 'orange'
      break
    case 'Crime': 
      myColorVariable = 'teal'
      break
    case 'Animation': 
      myColorVariable = 'pink'
      break
    case 'Romance': 
      myColorVariable = 'dark red'
      break
    case 'Thriller': 
      myColorVariable = 'grey'
      break
    case 'Horror': 
      myColorVariable = 'maroon'
      break
    default:
      myColorVariable = 'white'
    
  }
  return (
    <p style={{ backgroundColor: myColorVariable, color: 'white' }} >{props.genre.name}</p>
  )
}
