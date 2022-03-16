const input = (Genre) => {

let myColorVariable;
switch(props.genre) {
  case 'some genre': 
    myColorVariable = someColor.associated.with.a.specific.genre
    break
  default:
    myColorVariable = 'some cool color'
};

let BackgroundColor = (props) => {

return (
  <div>
    <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p>
    <p style={{backgroundColor: 'smokeywhite', color: 'rgb(221, 221, 221)'}} >{props.something}</p>
  </div>
    )
}
}
export default Genre;