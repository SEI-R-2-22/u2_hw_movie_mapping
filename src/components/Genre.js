import React from 'react'

const Genre = (props) => {
  let myColorVariable
  switch (props.genre.name) {
    case 'Action':
      myColorVariable = 'red'
      break
    case 'Adventure':
      myColorVariable = 'green'
      break
    case 'Fantasy':
      myColorVariable = 'blue'
      break
    case 'Crime':
      myColorVariable = 'brown'
      break
    case 'Horror':
      myColorVariable = 'cyan'
    case 'Thriller':
      myColorVariable = 'purple'
      break
    case 'Science Fiction':
      myColorVariable = 'orange'
      break
    default:
      myColorVariable = 'gray'
  }

  return (
    <div>
      <p style={{ backgroundColor: myColorVariable, color: '#000000' }}>
        {props.genre.name}
      </p>
    </div>
  )
}

export default Genre
