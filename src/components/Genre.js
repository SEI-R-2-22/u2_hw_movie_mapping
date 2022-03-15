import react from "react";

const Genre = (props) =>{

    let genColor = {
    Action : "blue",
    Adventure:"red",
    Fantasy:"green",
    Crime:"orange",
    Thriller:"yellow",
    ScienceFiction:"violet",
    Horror:"black",
    Animation:"#112233",
    Comedy : "#223344",
    Drama : "#334455",
    Family : "#445566",
    Music : "#556677",
    Mystery : "#667788",
    History : "#778899",
    Romance : "#889900",
    War : "#990000",
    TVMovie : "#000000",
    Western : "#aaaaaa",
    Documentary : "#bbbbbb"}
    let cColor = props.gen.replace(/\s/g, '')
    let bColor = genColor[cColor]

    console.log(bColor)
    return(
    <div style = {{backgroundColor:bColor}}>
        {props.gen}
    </div>
    )

}

export default Genre