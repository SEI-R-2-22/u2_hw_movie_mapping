import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
// import Genre from './components/Genre'


const App = () => {

  
  
  return(
    
    for(let i=0; i<movieArray.length; i++)
      {movieArray[i].title.map((mov) => (
      
      <div className="movie">
        <h3>Movie List</h3>
        <Movie 
          // name={mov[i].title}
          // key={mov[i].key}
          // pic={mov[i].poster_path}
        />
        {/* <Genre /> */}
        
      </div>
    ))}
  )
}


export default App;