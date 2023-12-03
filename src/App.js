//App.js
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieslistView from "./MovieList";
import FilterMovie from "./FilterMovie";
import { DefautlMovies } from "./Movies";
import MovieDetailsView from "./MovieDetails";

function Home() {
  /* movieslist state take by default the list from Movies file */
  const [movies, setMovies] = useState(DefautlMovies)
  /* 2 state for filtring by title/rating */
  const [filterbytitle, setFilterbytitle] = useState("")
  const [filterbyrating, setFilterbyrating] = useState(0)

  /* function to add new movie to the movies list */
  const addMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };
  return (
    <div className="App">
      <h1>WarnerBros</h1>
      {/* first row to display the filtring components */}
      <div class="row">
        <FilterMovie
          setFilterbytitle={setFilterbytitle}
          setFilterbyrating={setFilterbyrating}
          rating={filterbyrating}
          addMovie={addMovie}
        />
      </div>
      <div class="row">
        {/* second row to display the movies list */}
        <MovieslistView
          moviesList={movies}
          titlefilter={filterbytitle}
          ratingfilter={filterbyrating}
        />
      </div>
    </div>
  );
}
function App() {

  return (
    <Router>
      <Routes>
        {/* the defautl path (Home component) */}
        <Route path="/" element={<Home />} />

        {/* the movie details link */}
        <Route path="/movielist/:movieTitre" element={<MovieDetailsView />} />
      </Routes>
    </Router>
  );
}

export default App;