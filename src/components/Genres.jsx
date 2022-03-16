const Genre = (props) => {

let myColorVariable = '';
switch(props.genre) {
  case 'Action': 
    myColorVariable = 'green'
    break
  case 'Adventure':
    myColorVariable = '#F23054'
    break
  case 'Fantasy':
    myColorVariable = 'blue'
    break
  case 'Crime':
    myColorVariable = 'red'
    break
  case 'Thriller':
    myColorVariable = '#F2B705'
    break
  case 'Science Fiction':
    myColorVariable = '#D93636'
    break
  case 'Horror':
    myColorVariable = '#F24C27'
    break
  case 'Animation':
    myColorVariable = '#BF4226'
    break
  case 'Family':
    myColorVariable = '#8C1484'
    break
  case 'Comedy':
    myColorVariable = '#20261E'
    break
  case 'Music':
    myColorVariable = '#4F736F'
    break
  case 'History':
    myColorVariable = '#150259'
    break
  case 'Romance':
    myColorVariable = 'darkslateblue'
    break
  case 'War':
    myColorVariable = '#99C8F2'
    break
  case 'TV Movie':
    myColorVariable = '#648C27'
    break
  case 'Drama':
    myColorVariable = 'orange'
    break
  default:
    myColorVariable = 'white'
}

return (
  <div>
    <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.genre}</p>
  </div>
)
}

export default Genre