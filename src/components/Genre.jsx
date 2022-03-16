import React from 'react'

const Genre = (props) => {
  let genreColor;
  switch(props.name) {
    case 'Action':
      genreColor = 'orange'
      break
    case 'Adventure':
      genreColor = 'gold'
      break
    case 'Crime':
      genreColor = 'plum'
      break
    case 'Drama':
      genreColor = 'navy'
      break
    case 'Fantasy':
      genreColor = 'skyblue'
      break
    case 'Science Fiction':
      genreColor = 'thistle'
      break
    case 'Thriller':
      genreColor = 'darkgray'
      break
      default:
        genreColor = 'darkseagreen'
  }

  return (
    <div>
    <p style={{backgroundColor: genreColor, color: 'white'}} >{props.name}</p>
  </div>
  )
  }

export default Genre