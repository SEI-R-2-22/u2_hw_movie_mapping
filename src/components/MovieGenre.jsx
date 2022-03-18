let actionGenreColor
const Genre = (props) => {


  switch (props.genre.name) {
    case 'Action' : actionGenreColor = 'red'
    break
    case 'Adventure' : actionGenreColor = 'pink'
    break
    case 'Fantasy' : actionGenreColor = 'blue'
    break
    case 'Crime' : actionGenreColor = 'black'
    break
    case 'Thriller' : actionGenreColor = 'yellow'
    break
    case 'Science Fiction' : actionGenreColor = 'purple'
    break
    case 'Horror' : actionGenreColor = 'green'
    break
    case 'Animation' : actionGenreColor = 'teal'
    break
    case 'Comedy' : actionGenreColor = 'brown'
    break
    case 'Family' : actionGenreColor = 'peach'
    break
    case 'Romance' : actionGenreColor = 'coral'
    break
    case 'Musical' : actionGenreColor = 'citrine'
    break
    case 'History' : actionGenreColor = 'Apricot'
    break
    case 'Mystery' : actionGenreColor = 'grey'
    break
    default: actionGenreColor = 'Amber'
    break
  }

console.log(props.genre.name)
//   let actionGenreColor;
//   switch(props.genres.name) {
//     case 'Action': actionGenreColor = 'red'
//     break
//     default: actionGenreColor = 'black'
//   }

//     let adventureGenreColor;
//     switch(props.genres.name) {
//       case 'Adventure': adventureGenreColor = 'green'
//       break
//       default: adventureGenreColor = 'yellow'
//   }

//   let fantasyGenreColor;
//   switch(props.genres.name) {
//     case 'Fantasy': fantasyGenreColor = 'orange'
//     break
//     default: fantasyGenreColor = 'blue'
// }

  return (
    <div>
      <p style={{backgroundColor: actionGenreColor}} >{props.genre.name}</p>
    </div>
  )
}

export default Genre