const Genre = (props) => {

    let genreColor;

    switch(props.movieGenre.name) {
        case 'Action':
            genreColor = '#BB3E03';
            break
        case 'Animation':
            genreColor = '#F9844A';
            break
        case 'Adventure':
            genreColor = '#F9C74F';
            break
        case 'Comedy':
            genreColor = '#43AA8B';
            break
        case 'Crime':
            genreColor = '#577590';
            break
        case 'Documentary':
            genreColor = '#5A9367';
            break
        case 'Drama':
            genreColor = '#005F73';
            break
        case 'Family':
            genreColor = '#277DA1';
            break
        case 'Fantasy':
            genreColor = '#14591D ';
            break
        case 'History':
            genreColor = '#D4ADCF';
            break
        case 'Horror':
            genreColor = '#001219';
            break
        case 'Music':
            genreColor = '#94D2BD';
            break
        case 'Mystery':
            genreColor = '#0A9396';
            break
        case 'Romance':
            genreColor = '#9B2226';
            break
        case 'Science Fiction':
            genreColor = '#CA6702';
            break
        case 'Thriller':
            genreColor = '#AE2012'
        case 'TV Movie':
            genreColor = '#4D908E';
            break
        case 'War':
            genreColor = '#99621E';
            break
        case 'Western':
            genreColor = '#EE9B00';
            break
        default:
            genreColor = '#E9D8A6';
    }


    // Return
    return(
        <div className="genre">
            <p key={props.index} className = "genre-name" style={{ backgroundColor: genreColor, color: 'whitesmoke'}}>{ props.movieGenre.name }</p>
        </div>
    )
}

export default Genre