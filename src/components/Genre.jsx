import React from 'react'

const Genre = (props) => {

    let myColorVariable;
    switch(props.genre) {
      case 'Action': 
        myColorVariable = 'maroon'
        break
      case 'Adventure': 
        myColorVariable = 'purple'
        break
      case 'Animation': 
        myColorVariable = 'darkcyan'
        break
      case 'Crime': 
        myColorVariable = 'grey'
        break
      case 'Comedy': 
        myColorVariable = 'lime'
        break
      case 'Documentary': 
          myColorVariable = 'green'
          break
      case 'Drama': 
        myColorVariable = 'purple'
        break
      case 'Family': 
        myColorVariable = 'cornflowerblue'
        break
      case 'Fantasy': 
        myColorVariable = 'slateblue'
        break
      case 'History': 
        myColorVariable = 'teal'
      case 'Horror': 
        myColorVariable = 'sienna'
        break
      case 'Mystery': 
        myColorVariable = 'darkslategrey'
        break
      case 'Music': 
        myColorVariable = 'darkgoldenrod'
        break
      case 'Romance': 
        myColorVariable = 'mistyrose'
        break
      case 'Science Fiction': 
        myColorVariable = 'darkblue'
        break
      case 'Thriller': 
        myColorVariable = 'olive'
        break
      case 'TVMovie': 
        myColorVariable = 'tan'
        break
      case 'War': 
        myColorVariable = 'peru'
        break
      case 'Western': 
        myColorVariable = 'saddlebrown'
        break
      default:
        myColorVariable = 'white'
    }
  
    return (
      <div>
        <p style={{ backgroundColor: myColorVariable, color: 'white' }}>{props.genre}</p>
      </div>
    )

    return (
        <div>
            test 
        </div>
    )
}

export default Genre