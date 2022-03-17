import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

console.log(movieArray[0])
console.log(movieArray[1].adult)
console.log(movieArray[1].poster_path)
console.log("DONE")


export default function App () {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <main>
        {movieArray.map((movie) => (
          <Movie
          key={movie.list}
          title={movie.title}
          release={movie.release_date}
          poster={movie.poster_path}
          overview={movie.overview}
          gs={movie.genres}
        />
        ))}
      </main>

    </div>
  )
};































// console.log(movieArray[0])
// console.log(movieArray[1].adult)
// console.log(movieArray[1].poster_path)

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Movie List</h1>
//       <Movie>
//         {movieArray.map((genre) => (
//           <Genres 
//           key={genre.name}
//           title={genre.title}
//           release date={genre.release}
//           overview={genre.overview}
 

        
//           />
        
//         ))}
//       </Movie>

//     </div>
//   )}
// export default App
// function App() {
//   return (
// <div className="App">
//      <h1>Movie List</h1>
//      <div>
//   {movieArray.map((movie, index) => (
//         <div>
//         // Movie component here

//         // nested map here
//         {movie.genres.map((genre, index) => (
//           // Render each genre for a movie here by passing props into the Genre component
//        ))}
//         </div>
//   ))}
// </div>
     



  
