
const Genre = (props) => {
  let actionGenreColor;
  switch(props.genres.name) {
    case 'Action': actionGenreColor = 'red'
    break
    default: actionGenreColor = 'black'
  }

    let adventureGenreColor;
    switch(props.genres.name) {
      case 'Adventure': adventureGenreColor = 'green'
      break
      default: adventureGenreColor = 'yellow'
  }

  let fantasyGenreColor;
  switch(props.genres.name) {
    case 'Fantasy': fantasyGenreColor = 'orange'
    break
    default: fantasyGenreColor = 'blue'
}

  return (
    <div>
      // EXAMPLE of inline styling WITH a variable
      <p style={{backgroundColor: actionGenreColor, color: 'red'}} >{props.genres.name}</p>
    </div>
  )
}

export default Genre