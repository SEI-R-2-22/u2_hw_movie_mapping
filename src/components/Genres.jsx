import React from "react";
 
const Genres = (props) => {
    /// This technique using an object instead of switch was borrowed from Alex
    const colors = {
        Action: "#97DBAE",
        Adventure: "#C5D8A4",
        Fantasy: "#161853",
        Crime: "#D82148",
        Thriller: "#CDB699",
        ScienceFiction: "#461111",
        Horror: "#3D0000",
        Animation: "#FF0000",
        Comedy: "#5EE6EB",
        Drama: "#0C1E7F",
        Family: "#357C3C",
        Music: "#96CEB4",
        Mystery: "#9C0F48",
        History: "#541212",
        Romance: "#F68989",
        War: "#362706",
        TVMovie: "#C0A080",
        Western: "#1572A1",
        Documentary: "#74959A"
    }
    
    let myColorVariable = colors[props.genre]
    
    return (
        <p style={{ backgroundColor: myColorVariable}}>{props.genre}</p>        
    )
}

export default Genres