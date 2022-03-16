import React from 'react'

const Genre = (props) => {
  let genreColor
  switch (props.genre) {
    case 'Action':
      genreColor = 'red'
      break
    case 'Adventure':
      genreColor = 'blue'
      break
    case 'Fantasy':
      genreColor = 'green'
      break
    case 'Crime':
      genreColor = 'maroon'
      break
    case 'Thriller':
      genreColor = 'purple'
      break
    case 'Science Fiction':
      genreColor = 'yellow'
      break
    case 'Horror':
      genreColor = 'gray'
      break
    case 'Comedy':
      genreColor = 'orange'
      break
    case 'Drama':
      genreColor = 'teal'
      break
    case 'Family':
      genreColor = 'aqua'
      break
    case 'Animation':
      genreColor = 'chocolate'
      break
    case 'Romance':
      genreColor = 'burlywood'
      break
    case 'Documentary':
      genreColor = 'darkslateblue'
      break
    default:
      genreColor = 'hotpink'
  }

  return (
    <div>
      <p
        class="genre"
        style={{ backgroundColor: genreColor, color: 'lightslategray' }}
      >
        {props.genre}
      </p>
    </div>
  )
}

export default Genre
