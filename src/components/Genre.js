import React from 'react';
import genreColors from '../data/genres.json'

function Genre(props) {
  return (
    <div className={"genre " + props.genre} id={props.id}
    style={{ backgroundColor: genreColors[props.genre], color:'white' }}
    >
      {props.genre}
    </div>
  );
}

export default Genre;