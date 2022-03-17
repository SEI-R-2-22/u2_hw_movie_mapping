function Genre(props) {
    let myColorVariable;
    switch(props.genre.name) {
    case 'Crime': 
        myColorVariable = 'red'
        break
    case 'Action': 
        myColorVariable = 'blue'
        break
    case 'Science Fiction':
        myColorVariable = 'yellow'
        break
    case 'Thriller':
        myColorVariable = 'grey'
        break
    case 'Comedy':
        myColorVariable = 'lavender'
        break
    case 'Adventure':
        myColorVariable = 'green'
        break
    case 'Horror':
        myColorVariable = 'pink'
        break
    default:
        myColorVariable = 'orange'
    }

    return (
    <div>
        <p style={{backgroundColor: myColorVariable}} >{props.genre.name}</p>
    </div>
    )

}

export default Genre