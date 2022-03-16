import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
// import Genre from './components/Genre'


const App = () => {

  
  
  return(
    
    
      {movieArray.title.map((mov) => (
      
      <div className="movie">
        <h3>Movie List</h3>
        <Movie 
          // name={mov.title}
          // key={mov.key}
          // pic={mov.}
        />
        {/* <Genre /> */}
        
      </div>
    ))}
  )
}


export default App;