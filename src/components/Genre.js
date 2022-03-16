import React from 'react'

const Genre = (props) => {
    let myColorVariable
    switch(props.genre) {
        case 'Action':
            myColorVariable = 'red'
            break
        case 'Romance':
            myColorVariable = 'pink'
            break
        case 'Horror':
            myColorVariable = 'black'
            break
        default:
            myColorVariable = 'white'
    }
        return (
            <div className="Genre">
                <p style={{ backgroundColor: 'darkslateblue', color: myColorVariable}} >{props.genre}</p>
            </div>
    )
}





export default Genre
