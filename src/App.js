import "./styles/App.css";
import React from "react";
import movieArray from "./data/movies.json";
import Movie from "./components/Movie";

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>

      <div className="App-container">
        {movieArray.map((movie, i) => (
          <Movie
            key={i}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            img={movie.backdrop_path}
            genres={movie.genres}
            overview={movie.overview}
            release={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
