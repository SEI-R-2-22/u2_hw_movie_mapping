import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';
import Genre from './components/Genre'

let genres = []
for (let i = 0; i < movieArray.length; i++)
movieArray[i].genres.forEach(genre => {
  genres.push(genre)
});


console.log(genres.sort())


const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie, index) => (
        <div>
        <Movie 
          key={movie.id}
          title={movie.title}
          release={movie.release_date}
          poster={movie.poster_path}
          overview={movie.overview}
          
        />
        {movie.genres.map((genre) => (
            <Genre
              name={genre.name}
            />
          ))}
          </div>
      ))}
    </div>
  )
};

export default App;