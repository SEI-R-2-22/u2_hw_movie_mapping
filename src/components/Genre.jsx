const Genre = (props) => {
  let myColorVariable = null
  switch(props.genre) {
    case 'Action':
      myColorVariable = 'red'
      break
    case 'Adventure':
      myColorVariable = 'orange'
      break
    case 'Fantasy':
      myColorVariable = 'chartreuse'
      break
    case 'Crime':
      myColorVariable = 'brown'
      break
    case 'Thriller':
      myColorVariable = 'turquoise'
      break
    case 'Science Fiction':
      myColorVariable = 'cyan'
      break
    case 'Horror':
      myColorVariable = 'crimson'
      break
    case 'Comedy':
      myColorVariable = 'yellow'
      break
    case 'Drama':
      myColorVariable = 'skyblue'
      break
    case 'Animation':
      myColorVariable = 'aquamarine'
      break
    case 'Family':
      myColorVariable = 'gold'
      break
    case 'Romance':
      myColorVariable = 'pink'
      break
    case 'Documentary':
      myColorVariable = 'gray'
      break
    case 'Mystery':
      myColorVariable = 'blueviolet'
      break
    case 'History':
      myColorVariable = 'lightyellow'
      break
    default:
      myColorVariable = 'coral'
  }

  return (
    <div>
      <h2 style={{ backgroundColor: myColorVariable}} >{props.genre}</h2>
    </div>
  )
}

export default Genre