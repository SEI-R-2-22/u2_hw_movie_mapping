import React from 'react'

const Genre = (props) => {
    // console.log(props)
    let genreColors;
    let backgroundColorG = [props.genre]
    switch(props.genre) {
            case 'Action':
                genreColors = "red"
                break
            case 'Adventure':
                genreColors = "blue"
                break
            case 'Animation':
                genreColors = "pink"
                break
            case 'Comedy':
                genreColors = "orange"
                break
            case 'Crime':
                genreColors = "purple"
                break
            case 'Documentary':
                genreColors = "yellow"
                break
            case 'Drama':
                genreColors = "gray"
                break
            case 'Family':
                genreColors = "teal"
                break
            case 'Fantasy':
                genreColors = "green-yellow"
                break
            case 'History':
                genreColors = "#3c4fdd"
                break
            case 'Horror':
                genreColors = "#843cdd"
                break
            case 'Music':
                genreColors = "#a73cdd"
                break
            case 'Mystery':
                genreColors = "#da3cdd"
                break
            case 'Romance':
                genreColors = "#dd3caf"
                break
            case 'Science Finction':
                genreColors = "#dd3c77"
                break
            case 'Thriller':
                genreColors = "#dd3c3f"
                break
            case 'TV Movie':
                genreColors = "#dd7a3c"
                break
            case 'War':
                genreColors = "#84f335"
                break
            case 'Western':
                genreColors = "#35f3aa"
                break
            default:
                genreColors = "#61dafb"
        }
    return (
        <div className='Genre'>
                <p style={{ backgroundColor: backgroundColorG, color: genreColors }} >{props.genre}</p>
        </div>
    )
}

export default Genre