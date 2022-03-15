import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';
import Genre from './components/Genre';

const App = () => {
  let gArr =[];
  for(let i=0;i<movieArray.length;i++){
      for(let n = 0; n< movieArray[i].genres.length; n++){
        gArr.push(movieArray[i].genres[n].name)
      }
  }
  let unique = gArr.filter((x,index)=>{
    return gArr.indexOf(x) === index;
  });

  console.log(unique)

  return (
    <div className="App">
      <h1>Movie List</h1>
      {movieArray.map((movie,index) => (
          <div>
            <Movie key = {movie.id} title={movie.original_title} poster={movie.poster_path} rDate={movie.release_date} overview={movie.overview}/>
            <div className='genrA'>
              {movie.genres.map((gnra)=>(
                <Genre key={Math.random()} gen={gnra.name}/>
              ))}
            </div>
          </div>
      )
  )}
  </div>)
};

export default App;