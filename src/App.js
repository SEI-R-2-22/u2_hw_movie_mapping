import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'


const App = () => {
  const pic = movieArray.backdrop_path
  // console.log(movieArray)
  return(
    
      <div className="movie">
        <Movie 
          key={movieArray.id}
          pic={pic}
        />
      </div>
  )
}


export default App;