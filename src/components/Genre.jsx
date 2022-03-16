const Genre = (props) =>{


    let myColorVariable;
    switch(props.info.genre) {
        case 'Action': 
        myColorVariable = green
        break
        default:
        myColorVariable = 'green'

        return (
            <div>
        // EXAMPLE of inline styling without a variable
            <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p>

        // EXAMPLE of inline styling WITH a variable
            <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.something}</p>
            </div>
        )
    }
}