import React from 'react'
 
const Genre = (props) => {
    let myColorVariable;
    switch(props.genre.name) {
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
            myColorVariable = 'yellow'
            break
        case 'Thriller': 
            myColorVariable = 'grey'
            break
        case 'Science Fiction': 
            myColorVariable = 'teal'
            break
        case 'Horror': 
            myColorVariable = 'pink'
            break
        case 'Comedy': 
            myColorVariable = 'purple'
            break
        case 'Drama': 
            myColorVariable = 'orange'
            break
        case 'Family': 
            myColorVariable = 'white'
            break
        case 'Music': 
            myColorVariable = 'maroon'
            break
        case 'Animation': 
            myColorVariable = 'lime'
            break
        case 'Mystery': 
            myColorVariable = 'aqua'
            break
        case 'Romance': 
            myColorVariable = 'coral'
            break
        case 'War': 
            myColorVariable = 'darkred'
            break
        case 'TV Movie': 
            myColorVariable = 'red'
            break
      default:
        myColorVariable = 'cyan'
    }
   return (
       <div>
           <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.genre.name}</p>

       </div>
   )
 }

export default Genre