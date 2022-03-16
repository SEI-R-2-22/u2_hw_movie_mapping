import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {
  
  return (
    <div className="App">
      <h1>Movie List</h1>

      <div className="App-container">
        {movieArray.map((m) => (
          <Movie key={m.id} 
            id={m.id}
            title={m.title}
            posterUrl={m.poster_path}
            imgUrl={m.backdrop_path}
            genres={m.genres}
          />
        ))}
      </div>
    </div>
  )
};

export default App;