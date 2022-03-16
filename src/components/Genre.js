import React from 'react'

const Genre = (props) => {
  console.log(props.genre)

  let myColorVariable
  switch (props.genre) {
    case 'Action':
      myColorVariable = '#FA0606'
      break
    case 'Adventure':
      myColorVariable = '#0723D7'
      break
    case 'Animation':
      myColorVariable = '#EA1C51'
      break
    case 'Comedy':
      myColorVariable = '#3A71BE'
      break
    case 'Crime':
      myColorVariable = '#C70039'
      break
    case 'Documentary':
      myColorVariable = '#4DC786'
      break
    case 'Drama':
      myColorVariable = '#7315F1'
      break
    case 'Family':
      myColorVariable = '#F1ED15'
      break
    case 'Fantasy':
      myColorVariable = '#E097E6'
      break
    case 'History':
      myColorVariable = '#FFA903'
      break
    case 'Horror':
      myColorVariable = '#DAF7A6'
      break
    case 'Music':
      myColorVariable = '#1441F2'
      break
    case 'Mystery':
      myColorVariable = '#F2A614'
      break
    case 'Romance':
      myColorVariable = '#F214E9'
      break
    case 'Science Fiction':
      myColorVariable = '#5E6B79'
      break
    case 'Thriller':
      myColorVariable = '#0D9031'
      break
    case 'TV Movie':
      myColorVariable = '#14C2E4'
      break
    case 'War':
      myColorVariable = '#560924'
      break
    case 'Western':
      myColorVariable = '#B6B020'
      break
    default:
      myColorVariable = 'gray'
  }
  return (
    <div>
      <p style={{ backgroundColor: myColorVariable, color: '#000000' }}>
        {props.genre}
      </p>
    </div>
  )
}

export default Genre
