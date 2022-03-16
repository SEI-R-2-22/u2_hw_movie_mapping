import React from 'react' 

export default function Genre (props) {

    const colorSw = (props) =>{
        if(props.genre == 'Action'){
            
        }
    }
    // switch(props.genre) {
    //     case 'Action': 
    //       myColorSw = 'yellow'
    //       break
    //     default:
    //       myColorSw = 'white'
    //     case 'Horror': 
    //       myColorSw = 'red'
    //       break
    //     default:
    //       myColorSw = 'white'
    //     case 'Comedy': 
    //       myColorSw = 'blue'
    //       break
    //     default:
    //       myColorSw = 'white'
    //     case 'Drama': 
    //       myColorSw = 'purple'
    //       break
    //     default:
    //       myColorSw = 'white'
    // }
    
    return (
        <div>
            <p>{props.original_title} </p>
            {/* // EXAMPLE of inline styling without a variable */}
            <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p>
        </div>
    )
}