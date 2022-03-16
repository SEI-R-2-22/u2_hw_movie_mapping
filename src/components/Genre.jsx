import React from 'react'

function Genre(props) {
let myColorVariable;
switch(props.genres) {
  case 'Action': 
    myColorVariable = 'red'
    break
  default:
    myColorVariable = 'red'
}
return (
  <div>
    <p style={{ backgroundColor: '#FF0000', color: 'white' }} >{props.genres}</p>

    {/* // EXAMPLE of inline styling WITH a variable */}
    <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.genres}</p>
  </div>
)
}

export default Genre;