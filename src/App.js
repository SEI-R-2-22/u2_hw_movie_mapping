import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {
  // console.log(props.title)
  console.log(movieArray[0])
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => {
        return(
      <Movie movie={movie} />
        ) 
      })}
      
    </div>
  )
};
// console.log(Movie)
export default App;