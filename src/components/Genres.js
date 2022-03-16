import React from 'react'

const Genres = (props) => {
    let colorVariable
    switch{props.genre} {
        case 'some genre':
            colorVariable = Action.red
        break 
        default:
            colorVariable = 'aqua'

    }
    return (
        <div>
            <p style= {{backgroundColor: 'purple', color:'peachpuff'}} >{props.genre}</p>
        </div>
    )
}

export default Genres