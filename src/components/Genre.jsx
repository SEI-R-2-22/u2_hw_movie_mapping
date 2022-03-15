const Genre = (props) => {
  let myColorVariable;
  switch(props.genre) {
    case 'Action': 
      myColorVariable = "#D93636"
      break
    case 'Crime': 
      myColorVariable = "#732240"
      break
    case 'Thriller': 
      myColorVariable = "#BF4226"
      break
    case 'Science Fiction': 
      myColorVariable = "#4F736F"
      break
    case 'Adventure': 
      myColorVariable = "#648C27"
      break
    case 'Horror': 
      myColorVariable = "#20261E"
      break
    case 'Animation': 
      myColorVariable = "#F2B705"
      break
    case 'Comedy': 
      myColorVariable = "#F24C27"
      break
    case 'Drama': 
      myColorVariable = "#150259"
      break
    case 'Family': 
      myColorVariable = "#99C8F2"
      break
    case 'Fantasy': 
      myColorVariable = "#8C1484"
      break
    case 'Music': 
      myColorVariable = "#F23054"
      break

    default:
      myColorVariable = 'white'
  }

  return(
    <div>
      <p style={{ backgroundColor: "#f26b6b;", color: myColorVariable }}>{props.genre}</p>
    </div>
  )
}

export default Genre; 