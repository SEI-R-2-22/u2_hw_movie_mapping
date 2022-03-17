import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'
console.log(movieArray)

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
       {movieArray.map((movie, index) => (
       <div>
     
         < Movie movie={movie} />
    
       {movie.genres.map((genre)=> (
          < Genre movieGenre={genre} index={index}/>
       ))}
       
        
      </div>
      ))}
    </div>
  )
};

export default App;



