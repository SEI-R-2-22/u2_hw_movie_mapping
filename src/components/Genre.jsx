const Genre = (props) =>{
    props.info.genres.map()

    let myColorVariable

    switch (props.info.genres.name) {
        case 'Action':
            myColorVariable = 'aqua'
            break
        case 'Adventure':
            myColorVariable = 'blue'
            break
        case 'Animation':
            myColorVariable = 'blueviolet'
            break
        case 'Comedy':
            myColorVariable = 'cadetblue'
            break
        case 'Crime':
            myColorVariable = 'chartreuse'
            break
        case 'Drama':
            myColorVariable = 'chocolate'
            break
        case 'Family':
            myColorVariable = 'coral'
            break
        case 'Fantasy':
            myColorVariable = 'cornflowerblue'
            break
        case 'History':
            myColorVariable = 'crimson'
            break
        case 'Horror':
            myColorVariable = 'cyan'
            break
        case 'Music':
            myColorVariable = 'darkgoldenrod'
            break
        case 'Mystery':
            myColorVariable = 'darkolivegreen'
            break
        case 'Romance':
            myColorVariable = 'darksalmon'
            break
        case 'Science Fiction':
            myColorVariable = 'green'
            break
        case 'Thriller':
            myColorVariable = 'green'
            break
        default:
            myColorVariable = 'darkslateblue'
    }
    
    
    return(
        <div>
            <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.info.genres}</p>
        </div>
    )
}

export default Genre