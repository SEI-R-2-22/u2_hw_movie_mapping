import React from 'react';

const Genre = (props) => {
  let myColorVariable;
  switch (props.genre.name) {
    case 'Action':
      myColorVariable = 'red'
      break;
    case 'Adventure':
      myColorVariable = 'green'
      break;
    case 'Comedy':
        myColorVariable = 'yellow'
        break;  
    case 'Adventure':
        myColorVariable = 'green'
        break;
    case 'Fantasy':
        myColorVariable = 'orange'
        break;
    case 'Thriller':
        myColorVariable = '#800000'
        break;
    case 'Crime':
        myColorVariable = 'grey'
        break;
    case 'Science Fiction':
        myColorVariable = 'blue'
        break;
    case 'Animation':
        myColorVariable = '#FFC0CB'
        break;
    case 'Family':
        myColorVariable = '#909eb4'
        break;
    case 'Drama':
        myColorVariable = '#0B0B45'
        break;
    case 'Documentary':
        myColorVariable = 'brown'
        break;
    case 'History':
        myColorVariable = '#D7C19D'
        break;
    case 'War':
        myColorVariable = '#660000'
        break;
    case 'Music':
        myColorVariable = 'purple'
        break;
    case 'Western':
        myColorVariable = '#bbcab5'
        break;
    case 'romance':
        myColorVariable = '#E9606C'
        break;
    default:
      myColorVariable = 'black'
      break;
  }
  return (
    <div>
      <p style={{backgroundColor: myColorVariable}}>{props.genre.name}</p>
    </div>
  );
};

export default Genre;
