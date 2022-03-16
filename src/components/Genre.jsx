import React from 'react'
//WORKED ON ASSIGNMENT WITH RAN, ABDULLAH, AND RYAN.
// WE NEED HELP USING .MAP FOR COLOR AND GENRE 

const Genre = (props) => {
  let myColorVariable;
  switch(props.genre.name) {
    case 'Action': 
      myColorVariable = 'red'
       break
    




    default:
      myColorVariable = 'black'
  }

  
  return ( 
    <div>
      <p style={{backgroundColor: myColorVariable, color: '#000000'}}> {props.genre.name}</p>
    </div>
  )}

export default Genre;