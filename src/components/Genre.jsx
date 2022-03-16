import React from 'react'

function Genre(props) {
    let myColorVariable
  switch(props.genre.name) {
    case 'Action': 
      myColorVariable = 'rgb(123, 45, 255)'
      break
      case 'Adventure': 
      myColorVariable = 'rgb(89, 245, 200)'
      break
      case 'Fantasy': 
      myColorVariable = 'rgb(88, 250, 100)'
      break
      case 'Science Fiction': 
      myColorVariable = 'rgb(203, 100, 155)'
      break
      case 'Thriller': 
      myColorVariable = 'rgb(255, 200, 78)'
      break
      case 'Horror': 
      myColorVariable = 'rgb(155, 100, 160)'
      break
      case 'Crime': 
      myColorVariable = 'rgb(67, 200, 255)'
      break
      case 'Animation': 
      myColorVariable = 'rgb(255, 200, 230)'
      break
      case 'Comedy': 
      myColorVariable = 'rgb(255, 57, 68)'
      break
      case 'Drama': 
      myColorVariable = 'rgb(67, 255, 255)'
      break
      case 'Family': 
      myColorVariable = 'rgb(177, 200, 255)'
      break
      case 'Music': 
      myColorVariable = 'rgb(47, 210, 255)'
      break
    default:
      myColorVariable = 'rgb(50, 200, 150)'
  }

  return (
    <div>
        <p style={{backgroundColor: myColorVariable }} >{props.genre.name}</p> 
    </div>
  )
}

export default Genre