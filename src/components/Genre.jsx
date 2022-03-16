import React from "react"

const Genre = (props) => {

let myColorVariable;
switch(props.genres.name) {
  case 'Action': 
    myColorVariable = 'red'
    break
  case 'Romance':
    myColorVariable = 'pink'
    break
  case 'Fantasy':
    myColorVariable = 'blue'
    break
    case 'Horror':
    myColorVariable = 'darkred'
    break
    case 'Adventure':
    myColorVariable = 'darkgreen'
    break
    case 'Thriller':
    myColorVariable = 'gray'
    break
    case 'Comedy':
    myColorVariable = 'yellow'
    break
    case 'Drama':
    myColorVariable = 'indigo'
    break
    case 'Family':
    myColorVariable = 'green'
    break
    case 'Music':
    myColorVariable = 'orange'
    break
    case 'Science Fiction':
    myColorVariable = 'darkslateblue'
    break
    case 'Mystery':
    myColorVariable = 'violet'
    break
    case 'Crime':
    myColorVariable = 'darkred'
    break
  default:
    myColorVariable = 'purple'
}

return (
  <div className="Genre">
    {/* <h1 style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.original_title}</h1> */}
    <h1 style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.genres.name}</h1>
  </div>
)
}

export default Genre