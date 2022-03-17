function Genre(props) {
    return (
      <div>
        <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre.name}</p>
      </div>
    )
}
export default Genre