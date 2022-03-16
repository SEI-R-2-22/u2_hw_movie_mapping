import React from 'react'


const Genre = (props) => {
  console.log("test")
let colorVariable;
switch (props.genres.name){
  case 'Action':
    colorVariable = "red"
    break;
  case 'Adventure':
    colorVariable = "brown"
    break;
  case 'Family':
    colorVariable = "pink"
    break;
  case 'Animation':
    colorVariable = "blue"
    break;
  case 'Fantasy':
    colorVariable = "yellow"
    break;
  case 'Science Fiction':
    colorVariable = "silver"
    break;
  case 'Crime':
    colorVariable = "gold"
    break;
  case 'Drama':
    colorVariable = "purple"
    break;
  case 'Music':
    colorVariable = "lightblue"
    break;
  case 'Thriller':
    colorVariable = "orange"
    break;
  default:
    colorVariable = "gray"

}
  
  return(
  
    <div style={{backgroundColor: colorVariable}}>
      {props.genres.name}

    </div>
  )

}

export default Genre