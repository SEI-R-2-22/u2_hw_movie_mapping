import './styles/App.css'
import movieArray from './data/movies.json'
import React from 'react'
import Movie from './Components/Movie';
import Genre from './Components/Genre';
console.log(movieArray)
const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>

      {movieArray.map((movie)=>(
      <Movie
      // title = {movie.title}
      // poster = {movie.poster_path}
      // overview = {movie.overview}
      movie = {movie}
      />))}
{/* <div>
  {movieArray.map((movie, index) => (
        <div>
        // Movie component here

        // nested map here
        {movie.genres.map((genre, index) => (
          // Render each genre for a movie here by passing props into the Genre component
        ))}
        </div>
  ))}
</div> */}

      ))

    </div>
  )
};

export default App;