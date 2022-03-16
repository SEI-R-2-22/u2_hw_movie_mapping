import React from 'react';



function Genre(props) {
    let myColorVariable;
    switch(props.name) {
        case 'Action':
            myColorVariable = 'FireBrick'
            break
        case 'Adventure': 
            myColorVariable = 'GoldenRod'
            break
        case 'Fantasy':
            myColorVariable = `ForestGreen`
            break
        case 'Crime':
            myColorVariable = `DimGrey`
            break
        case 'Thriller':
            myColorVariable = `DodgerBlue`
            break
        case 'Science Fiction':
            myColorVariable = `DarkKhaki`
            break
        case 'Horror':
            myColorVariable = `MidnightBlue`
            break
        case 'Animation':
            myColorVariable = `LightSalmon`
            break
        case 'Comedy':
            myColorVariable = `MintCream`
            break
        case 'Drama':
            myColorVariable = `MediumOrchid`
            break
        case 'Family':
            myColorVariable = `LightSeaGreen`
            break
        case 'Music':
            myColorVariable = `LightGrey`
            break
        case 'Mystery':
            myColorVariable = `LightSlateGrey`
            break
        case 'History':
            myColorVariable = `NavajoWhite`
            break
        case 'Romance':
            myColorVariable = `Pink`
            break
        case 'War':
            myColorVariable = `SaddleBrown`
            break
        case 'TVMovie':
            myColorVariable = `Pink`
            break
        case 'Western':
            myColorVariable = `Pink`
            break
        case 'Documentary':
            myColorVariable = 'Thistle'
            break
    }
    return (
        <div>
            <p style={{backgroundColor: myColorVariable, color: '#000000'}} >
                {props.name}
            </p>
        </div>
    );
}

export default Genre;