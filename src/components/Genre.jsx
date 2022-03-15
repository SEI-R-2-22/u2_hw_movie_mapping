const Genre = ({ name }) => {
  let genreColor;
  switch(name) {
    case 'Action':
      genreColor = '#F28500' // tangerine
      break
    case 'Adventure':
      genreColor = '#CCCCFF' // periwinkle
      break
    case 'Fantasy':
      genreColor = '#E6E6FA' // lavender
      break
    case 'Crime':
      genreColor = '#800000' // maroon
      break
    case 'Thriller':
      genreColor = '#FF5349' // red orange
      break
    case 'Science Fiction':
      genreColor = '#7AD7F0' // light blue
      break
    case 'Horror':
      genreColor = '#dc143c' // crimson
      break
    case 'Animation':
      genreColor = '#90EE90' // light green
      break
    case 'Comedy':
      genreColor = '#FFFFE0' // light yellow
      break
    case 'Drama':
      genreColor = '#7f00ff' // violet
      break
    case 'Family':
      genreColor = '#008080' // teal
      break
    case 'Music':
      genreColor = '#C8A2C8' // lilac
      break
    case 'Mystery':
      genreColor = '#BCB88A' // sage
      break
    case 'History':
      genreColor = '#D2B4C8' // tan
      break
    case 'Romance':
      genreColor = '#FFCCCB' // light red
      break
    case 'War':
      genreColor = '#4b5320' // army green
      break
    case 'Western':
      genreColor = 'lightgoldenrodyellow'
      break
    case 'Documentary':
      genreColor = '#666B6C' // medium gray
      break
    case 'TV Movie':
      genreColor = '#BEC2CB' // silver
      break
    default:
      genreColor = '#FFC0CB' // pink
  }
  return (
    <div>
      <p style={{backgroundColor: genreColor, color: '#000000'}}>{name}</p>
    </div>
  )
}

export default Genre;