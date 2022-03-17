import './styles/App.css'
import React from 'react'
import Movie from './components/Movie';
import movieArray from './data/movies.json'
// import Genre from './Components/Genre'
console.log(movieArray)

  const App = () => {

    return (
    <div className="App">
      <h1>Movie List</h1>

      {movieArray.map((movie)=> (
      <Movie movie={movie}/>
      
      ))}
    </div>
  )
};

export default App;


/* next we need to call Movie into return after we movieArray.map and then add the things we want to pull from out child Movie. Refer to the mapping Lab */