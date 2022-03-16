import React from 'react'


const Genres = (props) => {
  let myColorVariable = 'red';
  switch(props.genre){
    case 'Action':
      myColorVariable = 'red'
      break;
    case 'Adventure':
      myColorVariable = 'steelblue'
      break
    case 'Fantasy':
      myColorVariable = 'blue'
      break
    case 'Crime':
      myColorVariable = 'green'
      break
    case 'Thriller':
      myColorVariable = 'grey'
      break
    case 'Comedy':
      myColorVariable = 'orange'
      break
    case 'Drama':
        myColorVariable = 'purple'
        break
    case 'Music':
        myColorVariable = 'brown'
        break
    case 'Family':
      myColorVariable = 'teal'
      break
    case 'Science Fiction':
      myColorVariable = 'indigo'
      break
      default:
        myColorVariable = 'magenta'
  }
  return (
    <div className={props.name}>
      <p style={{backgroundColor: myColorVariable, color: "rgb(255,255,255)"}}>{props.genre}</p>

    </div>
  )
}

export default Genres