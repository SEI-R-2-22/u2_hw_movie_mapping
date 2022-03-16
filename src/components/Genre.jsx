const Genre = (props) => {
    let myColorVariable;
    switch(props.genre.name) {
        case 'Action':
            myColorVariable = '#dc4f4f';
            break;
        case 'Adventure':
            myColorVariable = '#e9801c';
            break;
        case 'Animation':
            myColorVariable = '#9936f6';
            break;
        case 'Crime':
            myColorVariable = '#ff0000';
            break;
        case 'Comedy':
            myColorVariable = '#d5d225';
            break;
        case 'Drama':
            myColorVariable = '#ba55c2';
            break;
        case 'Documentary':
            myColorVariable = '#e0cb8f';
            break;
        case 'Family':
            myColorVariable = '#8fe0ae';
            break;
        case 'Fantasy':
            myColorVariable = '#dd708a';
            break;
        case 'History':
            myColorVariable = '#e3c099';
            break;
        case 'Horror':
            myColorVariable = '#267522';
            break;
        case 'Music':
            myColorVariable = '#3db4a4';
            break;
        case 'Mystery':
            myColorVariable = '#1fd87e';
            break;
        case 'Romance':
            myColorVariable = '#ffd1dc';
            break;
        case 'Science Fiction':
            myColorVariable = '#3d82b4';
            break;
        case 'TV Movie':
            myColorVariable = '#e8e36d';
            break;
        case 'War':
            myColorVariable = '#635071';
            break;
        case 'Western':
            myColorVariable = '#9a5e26';
            break;
        default:
            myColorVariable = '#afbcb6';
    }

    return (
        <div>
            <h3 style = {{ backgroundColor: myColorVariable}}>{ props.genre.name }</h3>
        </div>
    )
}

export default Genre;