import React from 'react'

const Genre = (props) => {
let myColorVariable;
switch(props.genre) {
  case 'Action': 
    myColorVariable = '#bd0000'
    break
    case 'Adventure': 
    myColorVariable = '#c7360e'
    break
    case 'Animation': 
    myColorVariable = '#ff6f00'
    break
    case 'Comedy': 
    myColorVariable = '#ffe100'
    break
    case 'Crime': 
    myColorVariable = '#81c700'
    break
    case 'Documentary': 
    myColorVariable = '#2ec700'
    break
    case 'Drama': 
    myColorVariable = '#00f064'
    break
    case 'Family': 
    myColorVariable = '#00f0d0'
    break
    case 'Fantasy': 
    myColorVariable = '#00c4f0'
    break
    case 'History': 
    myColorVariable = '#0088f0'
    break
    case 'Horror': 
    myColorVariable = '#0010f0'
    break
    case 'Music': 
    myColorVariable = '#6400f0'
    break
    case 'Mystery': 
    myColorVariable = '#b000f0'
    break
    case 'Romance': 
    myColorVariable = '#f000ec'
    break
    case 'Science Fiction': 
    myColorVariable = '#bd0074'
    break
    case 'Thriller': 
    myColorVariable = '#bd003f'
    break
    case 'TV Movie': 
    myColorVariable = '#78bf45'
    break
    case 'War': 
    myColorVariable = '#9b6da8'
    break    
    case 'Western': 
    myColorVariable = '#a86c81'
    break
  default:
    myColorVariable = '#757575'
    break
}
console.log(props.genre)
return (
  <div>
    <p style={{backgroundColor: myColorVariable, color: 'white'}} >{ props.genre }</p>
  </div>
)
}

export default Genre;