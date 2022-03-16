import React from 'react'



const Genre = (props) => {

  let myColorVariable;
  switch(props.genreType) {
  case 'Action': 
    myColorVariable = "rgb(50,200,200)"
    break
  case 'Crime':
    myColorVariable = "rgb(200,50,200)"
    break
  case 'Comedy':
    myColorVariable = "rgb(150,255,255)"
    break
  case 'Adventure':
    myColorVariable = "rgb(150,200,200)"
    break
  case 'Fantasy':
    myColorVariable = "rgb(255,150,255)"
    break
  case 'Thriller':
    myColorVariable = "rgb(255,255,150)"
    break
  case 'Family':
    myColorVariable = "rgb(0,150,255)"
    break
  case 'Music':
    myColorVariable = "rgb(150,0,255)"
    break
  case 'Science Fiction':
    myColorVariable = "rgb(150,255,0)"
    break
  case 'History':
    myColorVariable = "rgb(150,255,150)"
    break
  case 'Mystery':
    myColorVariable = "rgb(100,255,200)"
    break
  case 'Horror':
    myColorVariable = "rgb(200,255,100)"
    break
  case 'Animation':
    myColorVariable = "rgb(100,255,200)"
    break
  case 'Drama':
    myColorVariable = "rgb(255,200,200)"
    break
  case 'Romance':
    myColorVariable = "rgb(255,100,100)"
    break
  case 'War':
    myColorVariable = "rgb(150,150,150)"
    break
  case 'TV Movie':
    myColorVariable = "rgb(0,150,150)"
    break
  case 'Documentary':
    myColorVariable = "rgb(150,150,0)"
    break
  default:
    myColorVariable = 'rgb(0,255,0)'
    break
}
  return (
    <div className="genre-styling">
    <p style={{backgroundColor: myColorVariable, color: '#000000'}}>{props.genreType}</p>
  </div>
  )
}

export default Genre


