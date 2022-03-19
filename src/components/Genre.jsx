import React from 'react'

function Genre(props) {

  let genreColor
  switch(props.genre){
    case 'Action':
      genreColor = 'red'
      break
      default:
        genreColor = 'blue'
      break
      case 'Crime':
        genreColor = 'black'
      break
    case 'Thriller':
      genreColor = 'yellow'
    break
    case 'Adventure':
      genreColor = 'darkcyan'
    break
    case 'Science Fiction':
      genreColor = 'limegreen'
    break
    case 'Comedy':
      genreColor = 'pink'
    break
    case 'Animation':
      genreColor = 'purple'
    break
    case 'Fantasy':
      genreColor='orange'
    break
    case 'Horror':
      genreColor= 'gray'
    break

  }

  return (
    <div key={props.id}>
      <h3>Genre</h3>
      <div style={{backgroundColor: genreColor}}>{props.genres}</div>
    </div>

  )
}

export default Genre