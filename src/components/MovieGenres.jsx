function MovieGenres(props) {
    let myColorVariable;
    switch(props.genre.name) {
      case 'Action': 
        myColorVariable = 'red'
        break
      default:
        myColorVariable = 'black'
    }
  
    return (
      <div>
        <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p>
      </div>
    )
}
export default MovieGenres