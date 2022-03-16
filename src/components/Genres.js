import React from 'react';

function Genres(props) {
    let myColor
    switch(props.genre){
        case 'Action':
            myColor = "#dd3c3c"
            break
        case 'Adventure':
            myColor = "dd7c3c"
            break
        case 'Animation':
            myColor = "#ddbc3c"
            break
        case 'Comedy':
            myColor = "#b7dd3c"
            break
        case 'Crime':
            myColor = "#7cdd3c"
            break
        case 'Documentary':
            myColor = "#3cdd7f"
            break
        case 'Drama':
            myColor = "#3cddca"
            break
        case 'Family':
            myColor = "#3ca2dd"
            break
        case 'Fantasy':
            myColor = "#3c7fdd"
            break
        case 'History':
            myColor = "#3c4fdd"
            break
        case 'Horror':
            myColor = "#843cdd"
            break
        case 'Music':
            myColor = "#a73cdd"
            break
        case 'Mystery':
            myColor = "#da3cdd"
            break
        case 'Romance':
            myColor = "#dd3caf"
            break
        case 'Science Finction':
            myColor = "#dd3c77"
            break
        case 'Thriller':
            myColor = "#dd3c3f"
            break
        case 'TV Movie':
            myColor = "#dd7a3c"
            break
        case 'War':
            myColor = "#84f335"
            break
        case 'Western':
            myColor = "#35f3aa"
            break
        default:
            myColor = "#61dafb"
    }
    
    return (
        <div>
            <p style={{backgroundColor: myColor, color:'#000000'}}>{props.genre}</p>
        </div>
    );
}

export default Genres;