import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
// import Genre from './components/Genre'


export default function App = () => {

  console.log(movieArray.value)
  
  return(
  
    // movieArray.forEach((movie) => {
    //   <div className="movie">
    //     <h3>Movie List</h3>
    //     <Movie 
    //       name={movie.original_title}
    //       key={movie.id}
    //       pic={movie.poster_path}
    //     />
    //     {/* <Genre /> */}
        
    //   </div>
    // })
  )
}


export default App;