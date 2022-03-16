import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';
import Genre from './components/Genre';

const App = () => {

  

  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
      {movieArray.map((movie)=> (
        <div>
        <Movie 
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
          poster={movie.poster_path}
          genres={movie.genres}
          />
          {movie.genres.map((genre)=> (

            <Genre 
            
              genre={genre.name}

            />

          ))}
        </div>

          ))}

          

        
          



      

         
      </div>

    </div>
  )
};

export default App;