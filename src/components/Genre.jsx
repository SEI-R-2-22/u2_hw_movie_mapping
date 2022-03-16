const Genre = (props) => {
    let myColorVariable = null
    switch(props.genre) {
      case 'Action':
        myColorVariable = 'red'
        break
      case 'Adventure':
        myColorVariable = 'blue'
        break
      case 'Fantasy':
        myColorVariable = 'green'
        break
      case 'Crime':
        myColorVariable = 'gray'
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
        myColorVariable = 'silver'
        break
      case 'Drama':
        myColorVariable = 'purple'
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
        myColorVariable = 'brown'
        break
      case 'Mystery':
        myColorVariable = 'orange'
        break
      case 'History':
        myColorVariable = 'yellow'
        break
      default:
        myColorVariable = 'white'
    }
  
    return (
      <div>
        <h2 style={{ backgroundColor: myColorVariable}} >{props.genre}</h2>
      </div>
    )
  }
  
  export default Genre