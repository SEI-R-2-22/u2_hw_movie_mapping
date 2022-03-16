const Genre = (props) => {
    let myColorVariable;

    switch(props.genre.name) {
    case 'Action': 
        myColorVariable = "red"
        break
    case 'Adventure': 
        myColorVariable = "orange"
        break
    case 'Fantasy': 
        myColorVariable = "yellow"
        break
    case 'Crime': 
        myColorVariable = "green"
        break
    case 'Thriller': 
        myColorVariable = "lightblue"
        break
    case 'Science Fiction': 
        myColorVariable = "darkblue"
        break
    case 'Horror': 
        myColorVariable = "purple"
        break
    case 'Drama': 
        myColorVariable = "pink"
        break
    case 'Comedy': 
        myColorVariable = "grey"
        break
    default:
        myColorVariable = 'Black'
    }
    
    return (
    <div>
        {/* // EXAMPLE of inline styling without a variable
        <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p> */}

        {/* // EXAMPLE of inline styling WITH a variable */}
        <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.genre.name}</p>
    </div>
    )
}

export default Genre