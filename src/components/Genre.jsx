const Genre = (props) =>{
    let myColorVariable
    switch (props.genre.name) {
        case 'Action':
            myColorVariable = 'darkorange'
            break
        case 'Adventure':
            myColorVariable
            break
        case 'Animation':
            myColorVariable
            break
    }
    
    
    return(
        <div>
            this is genre div
        </div>
    )
}

export default Genre