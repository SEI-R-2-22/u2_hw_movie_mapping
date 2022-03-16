import React from "react";


const Genre = (props) => {
    let bgColor = null;
    
    
    
    

        
        switch (props.genrePass) {

        case "Action":
            bgColor = '#FF002F'
                       
            break;

        case "Adventure":
            bgColor = '#FF9D00'
            
            break;

        case "Animation":
            bgColor = "#6AFF00"
            
            break;

        case "Drama":
            bgColor = "#8F692C"
            
            break;

        case "Horror":
            bgColor = "#E0F218"
            
            break;

        case "Comedy":
            bgColor = "#18EFF2"
            
            break;

        case "Romance":
            bgColor = "#F218D5"
            
            break;

        case "Fantasy":
            bgColor = "#F5B68C"
            
            break;

        case "Family":
            bgColor = "#F3F58C"
            
            break;

        default:
            bgColor = "#BB8CF5"
            
            break;
        }
    
    
   

    
    return (
        
        <div>
            

            <p style={{backgroundColor: bgColor}}>{props.genrePass}</p>

            
        </div>
    )
    

    }

export default Genre


