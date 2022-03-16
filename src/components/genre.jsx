let myColorVariable;
switch(props.genre) {
  case 'some genre': 
    myColorVariable = someColor.associated.with.a.specific.genre
    break
  default:
    myColorVariable = 'some cool color'
}

return (
  <div>
    // EXAMPLE of inline styling without a variable
    <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p>

    // EXAMPLE of inline styling WITH a variable
    <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.something}</p>
  </div>
)