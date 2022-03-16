const Genre = (props) => {

  let myColorVariable;
  switch(props.genre) {
    case 'Action':
      myColorVariable = 'red'
      break
    case 'Crime':
      myColorVariable = 'yellow'
      break
    case 'Adventure':
      myColorVariable = 'orange'
      break
    case 'Animation':
      myColorVariable = 'pink'
      break
    case 'Drama':
      myColorVariable = 'mediumpurple'
      break
    case 'Horror':
      myColorVariable = 'green'
      break
    case 'Thriller':
      myColorVariable = 'cyan'
      break
    case 'Science Fiction':
      myColorVariable = 'lightgray'
      break
    case 'Fantasy':
      myColorVariable = 'lightgreen'
      break
    case 'Comedy':
      myColorVariable = 'fuchsia'
      break
    case 'Family':
      myColorVariable = 'teal'
      break
    case 'Music':
      myColorVariable = 'lime'
      break
    case 'Mystery':
      myColorVariable = 'crimson'
      break
    case 'History':
      myColorVariable = 'coral'
      break
    case 'Romance':
      myColorVariable = 'deepskyblue'
      break
    case 'War':
      myColorVariable = 'hotpink'
      break
    case 'Western':
      myColorVariable = 'khaki'
      break
    case 'Documentary':
      myColorVariable = 'palegreen'
      break
    case 'TV Movie':
      myColorVariable = 'mintcream'
      break
    default:
      myColorVariable = 'white'
  }

  return (
    <div className="genreIndiv">
    <p style={{backgroundColor: myColorVariable, color: '#000000'}}>
      {props.genre}
    </p>
    </div>
  )
}

export default Genre