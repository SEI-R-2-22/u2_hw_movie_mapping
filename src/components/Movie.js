import react from "react";

export default function Movie(props) {

    return (
        <li className="movieInfo">
            <h3> title: {props.title} </h3>
            <h3> release date:{props.release_date} </h3>
            <h3> overview:{props.overview} </h3>
            <img src={props.poster_path}></img>
            

       </li>

    )


};
