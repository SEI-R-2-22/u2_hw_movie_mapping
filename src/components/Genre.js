import react from "react";

export default function Genre(props) {
    let myColorVariable;
    switch(props.genre) {
        case 'some genre': 
          myColorVariable = myColorVariable.associated.with.a.specific.genre
          break
        default:
          myColorVariable = 'orange';
      }
    return (
        <div>
      <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p>

      </div>
    )

    
}