import React from 'react'

function Genre (props) {
  let myColorVariable;
  switch(props.genre) {
    case 'Action': 
      myColorVariable = 'blue'
      break
    default:
      myColorVariable = 'white'
  }

  return (
    <div className='Genre'>
      
      <p style={{ backgroundColor: 'red', color: myColorVariable }} > 
      {props.genre}</p>

     
    </div>
  )
}
export default Genre