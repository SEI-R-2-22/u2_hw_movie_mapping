import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
// import Genre from './components/Genre'


const App = () => {

  // console.log(movieArray.value)
  const array = [movieArray]
  return(
  
    {movieArray.map((name, key, pic) => (
      <div className="movie">
        <h3>Movie List</h3>
        <Movie 
          name={name}
          key={key}
          pic={pic}
        />
        {/* <Genre /> */}
        
      </div>
    ))}
  )
}


export default App;