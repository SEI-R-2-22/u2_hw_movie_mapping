import React from 'react'

function Genre(props) {

let myColorVariable;
switch(props.genre) {
    case 'Action': 
    myColorVariable = "blue"
    break
    case 'Adventure': 
    myColorVariable = "green"
    break
    case 'Comedy': 
    myColorVariable = "DarkOrange"
    break
    case 'Crime': 
    myColorVariable = "purple"
    break
    case 'Ganster': 
    myColorVariable = "purple"
    break
    case 'Drame': 
    myColorVariable = "red"
    break
    case 'Fantacy': 
    myColorVariable = "gold"
    break
    case 'Science Fiction': 
    myColorVariable = "Chartreuse"
    break
    case 'Horror': 
    myColorVariable = "darkred"
    break
    case 'Animation': 
    myColorVariable = "SteelBlue"
    break
    case 'Family': 
    myColorVariable = "coral"
    break
    case 'Mystery': 
    myColorVariable = "darkolivegreen"
    break
    case 'History': 
    myColorVariable = "goldenrod"
    break
    case 'Romance': 
    myColorVariable = "hotpink"
    break
    case 'War': 
    myColorVariable = "grey"
    break
    case 'TV Movie': 
    myColorVariable = "mintcream"
    break
    case 'Western': 
    myColorVariable = "peru"
    break
    case 'Music': 
    myColorVariable = "orchid"
    break

  default:
    myColorVariable = '#6667AB'
}

return (
    <div className="Genre">
    <p style={{ backgroundColor: '', color: myColorVariable}}>{props.genre}</p>
</div>
)

}

export default Genre
