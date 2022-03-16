


const Genre = (props) => {
    console.log(props)
  let myColorVariable;
  switch(props.genre.name) {
    case 'Action': 
      myColorVariable = 'red'
      break
    case 'Romance':
        myColorVariable = 'pink'
        break
    case 'Fantasy':
        myColorVariable = 'green' 
        break
    case 'Crime':
        myColorVariable = 'orange' 
        break
    case 'Horror':
        myColorVariable = 'black' 
        break
    case 'Animation':
        myColorVariable = 'purple' 
        break
    case 'Comedy':
        myColorVariable = 'cyan' 
        break
    case 'Drama':
        myColorVariable = 'light purple' 
        break
    case 'Family':
        myColorVariable = '#11d990' 
        break
    case 'Music':
        myColorVariable = '#a749eb' 
        break
    case 'Mystery':
        myColorVariable = '#a81865' 
        break
    case 'History':
        myColorVariable = '#915500' 
        break
    case 'Romance':
        myColorVariable = '#eb0942' 
        break
    case 'War':
        myColorVariable = '#610101' 
        break
    case 'TVMovie':
        myColorVariable = '#4ecc9e' 
        break
    case 'Western':
        myColorVariable = '#95cc4e' 
        break
    case 'Documentary':
        myColorVariable = '#c4bd87' 
        break  
    case 'Adventure':
        myColorVariable = 'teal' 
        break
    default:
      myColorVariable = 'some cool color'
  }
    return (
      <div className="genres">
          <p className='genres'style={{ color: myColorVariable }} >{props.genre.name}</p>
      </div>
    )
  };
  
  export default Genre;