

const Genre = (props) => {
console.log(props)
  let myColorVariable;

  switch (props.genre.name) {
    case 'Action':
      myColorVariable = 'yellow'
      break
    case 'Horror':
        myColorVariable = 'red'
        break
    case 'Fantasy':
      myColorVariable = 'gold'
      break
    case 'Thriller':
      myColorVariable = 'blue'
      break
    case 'Comedy':
        myColorVariable = 'pink'
        break
    case 'Music':
      myColorVariable = 'grey'
      break
    case 'Animation':
        myColorVariable = 'purple'
        break
    case 'Drama':
          myColorVariable = 'teal'
          break
    default:
      myColorVariable = 'green'
  }

  return (
    <div>
      <p style={{backgroundColor: myColorVariable, color:'#000000'}}>{props.genre.name}</p>
    </div>
  )
}

export default Genre