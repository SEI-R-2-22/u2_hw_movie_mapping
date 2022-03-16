import react from "react";



const Genre = (props) => {
let myColorVariable;
switch(props.genres) {
  case 'Action': 
    myColorVariable = "Red"
    break
    case 'Adventure': 
    myColorVariable = "Blue"
    break
    case 'Fantasy': 
    myColorVariable = "Pink"
    break
    case 'Crime': 
    myColorVariable = "Purple"
    break
    case 'Thriller': 
    myColorVariable = "Magenta"
    break
    case 'Science Fiction': 
    myColorVariable = "Yellow"
    break
    case 'Horror': 
    myColorVariable = "Orange"
    break
    case 'Animation': 
    myColorVariable = "Green"
    break
    case 'Comedy': 
    myColorVariable = "Violet"
    break
    case 'Drama': 
    myColorVariable = "Red"
    break
    case 'Family': 
    myColorVariable = "#123456"
    break
    case 'Music': 
    myColorVariable = "#234567"
    break
    case 'Mystery': 
    myColorVariable = "#345678"
    break
    case 'History': 
    myColorVariable = "#456789"
    break
    case 'Romance': 
    myColorVariable = "#567894"
    break
    case 'War': 
    myColorVariable = "#754321"
    break
    case 'TVMovie': 
    myColorVariable = "#454545"
    break
    case 'Western': 
    myColorVariable = "#358484"
    break
    case 'Documentary': 
    myColorVariable = "#565656"
    break
  default:
    myColorVariable = 'aqua'
}

return (
  <div>
    <li style={{color: myColorVariable,}} >{props.genres}</li>
  </div>
)
}

export default Genre