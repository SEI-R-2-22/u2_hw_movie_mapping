
const Genre = (props) => {

let myColorVariable;
  switch(props.genre.name) {
    case 'Action': 
      myColorVariable = 'blue'
      break
    case 'Adventure': 
      myColorVariable = 'green'
      break
    case 'Comedy': 
      myColorVariable = 'yellow'
      break
    case 'Crime': 
      myColorVariable = 'purple'
      break
    case 'Drama': 
      myColorVariable = 'red'
      break
    case 'Horror': 
      myColorVariable = 'darkgreen'
      break
    case 'Music': 
      myColorVariable = 'orange'
      break
    case 'Science Fiction': 
      myColorVariable = 'silver'
      break
    case 'War': 
      myColorVariable = 'grey'
      break
    case 'Thriller': 
      myColorVariable = '#94934a'
      break
    case 'Animation': 
      myColorVariable = '#94114a'
      break
    case 'Family': 
      myColorVariable = '#34934a'
      break
    case 'Fantasy': 
      myColorVariable = '#834a4a'
      break
    default:
      myColorVariable = '#38ce58'
      break
  }

  return (
    <div className="Genre" key={props.genre.id}>      
      <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.genre.name}</p>
    </div>
  )
}
export default Genre