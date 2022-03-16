import React from 'react'


  const Genre = (props) =>  {
    let myColorVariable
    switch (props.genre) {
    case 'Action': 
      myColorVariable = 'Red'
      break
      case 'Crime': 
      myColorVariable = 'Green'
      break
      case 'Thriller': 
      myColorVariable = 'Yellow'
      break
    default:
      myColorVariable = 'White'
  }

  return (
    <div className = 'Genre'>
      
      <p style={{ backgroundColor: 'dogerblue', color: myColorVariable }} >{props.genre}</p>
    </div>
  )
}
  export default Genre 