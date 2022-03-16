import React from 'react'

const Genre = (props) => {
  let genreColor = ''
  switch (props.name) {
    case 'Action':
      genreColor = '#E70202'
      break
    case 'Adventure':
      genreColor = '#088122'
      break
    case 'Fantasy':
      genreColor = '#399ADB'
      break
    case 'Crime':
      genreColor = '#123BF0'
      break
    case 'Thriller':
      genreColor = '#3b0606'
      break
    case 'Science Fiction':
      genreColor = '#c46c24'
      break
    case 'Horror':
      genreColor = '#0c0a0a'
      break
    case 'Animation':
      genreColor = '#BE3EE6'
      break
    case 'Comedy':
      genreColor = '#0D289C'
      break
    case 'Drama':
      genreColor = '#750C96'
      break
    case 'Family':
      genreColor = '#33c9a8e6'
      break
    case 'Music':
      genreColor = '#630433'
      break
    case 'Mystery':
      genreColor = '#555057'
      break
    case 'History':
      genreColor = '#DFDC2D'
      break
    case 'Romance':
      genreColor = '#BD4DE9'
      break
    case 'War':
      genreColor = '#072C0A'
      break
    case 'TV Movie':
      genreColor = '#DEEC14'
      break
    case 'Western':
      genreColor = '#B38B09'
      break
    case 'Documentary':
      genreColor = '#F0A80C'
      break
    default:
      genreColor = 'black'
  }

  return (
    <div className="genre">
      <p style={{ backgroundColor: genreColor, color: '#f2f2f2' }}>
        {props.name}
      </p>
    </div>
  )
}

export default Genre
