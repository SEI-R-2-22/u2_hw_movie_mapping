import React from "react"

const Genre = (props) => {
    let myColorVariable;
    switch (props.genre) {
        case 'action':
            myColorVariable = 'orange'.genre
            break
        case 'romance':
            myColorVariable = 'purple'.genre
            break
        case 'fantasy':
            myColorVariable = 'green'.genre
            break
        case 'thriller':
            myColorVariable = 'magenta'.genre
            break
        case 'science fiction':
            myColorVariable = 'turquoise'.genre
            break
        default:
            myColorVariable = 'violet'

    }
    return (
        <div>
            <p style={{ backgroundColor: myColorVariable, color: 'blue' }}>
                {props.children}
            </p>
        </div>
    )
};

export default Genre;