let genreColor
const Genre = (props) => {


  switch (props.genre.name) {
    case 'Action' : genreColor = 'red'
    break
    case 'Adventure' : genreColor = 'pink'
    break
    case 'Fantasy' : genreColor = 'blue'
    break
    case 'Crime' : genreColor = 'black'
    break
    case 'Thriller' : genreColor = 'yellow'
    break
    case 'Science Fiction' : genreColor = 'purple'
    break
    case 'Horror' : genreColor = 'green'
    break
    case 'Animation' : genreColor = 'teal'
    break
    case 'Comedy' : genreColor = 'brown'
    break
    case 'Family' : genreColor = 'peach'
    break
    case 'Romance' : genreColor = 'coral'
    break
    case 'Musical' : genreColor = 'citrine'
    break
    case 'History' : genreColor = 'Apricot'
    break
    case 'Mystery' : genreColor = 'grey'
    break
    default: genreColor = 'Amber'
    break
  }

console.log(props.genre.name)

  return (
    <div>
      <p style={{backgroundColor: genreColor}} >{props.genre.name}</p>
    </div>
  )
}

export default Genre