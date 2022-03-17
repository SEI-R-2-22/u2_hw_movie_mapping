import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'


// console.log(movieArray)

const App = () => {   // component definition
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((info) => (
        <div>
        <Movie info={info} key={info.id}/>

        {info.genres.map((genre) => (
          <Genre genre={genre} key={genre.name}/>

        ))}
        </div>
        
        
        

      ))}
      
      
    </div>
  )
};

export default App; // making the components and all of it's defined functionality 
// available for everyone else