import React from "react";

const Genre = (props) => {
  let myColor;
  switch (props.genre) {
    case "Action":
      myColor = "orange";
      break;
    case "Romance":
      myColor = "pink";
      break;
    case "Science Fiction":
      myColor = "gold";
      break;
    case "Fantasy":
      myColor = "green";
      break;
    case "Comedy":
      myColor = "yellow";
      break;
    case "Crime":
      myColor = "grey";
      break;
    case "Thriller":
      myColor = "red";
      break;
    case "Horror":
      myColor = "black";
      break;
    case "Adventure":
      myColor = "brown";
      break;
    case "Family":
      myColor = "magenta";
      break;
    case "Music":
      myColor = "blue";
      break;
    case "Drama":
      myColor = "purple";
      break;
    case "Animation":
      myColor = "teal";
      break;

    default:
      myColor = "white";
  }
  return (
    <div className="Genre">
      <p style={{ backgroundColor: "darkslateblue", color: myColor }}>
        {props.genre}
      </p>
    </div>
  );
};

export default Genre;
