import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from "./components/Movie.jsx"
import Genre from "./components/Genre.jsx"

console.log(movieArray)

//  App = () => {
function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      { movieArray.map((movieArray) => (
        <><Movie
          key={movieArray.title}
          movie={movieArray} />
          <Genre
            key={movieArray.id} 
            genre={movieArray.genres.name}
            /></>
      ))}
    </div>
  );
};

export default App;