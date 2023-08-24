import React from "react";
import { useEffect } from "react";

import "./App.css";
import searchIcon from "./search.svg";

const API_URL = `https://www.omdbapi.com/?apikey=4caf39f5`;

const movieTest = {
  Title: "Spiderman in Cannes",
  Year: "2016",
  imdbID: "tt5978586",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
};

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  //Como se fosse o ngOninit
  useEffect(() => {
    searchMovies("spiderman");
  }, []); //[] ~~> Utilizado vazio para chamar apenas no start da pagina

  return (
    <div className="app">
      <h1>Filmes</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="Search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movieTest.Year}</p>
          </div>

          <div>
            <img
              src={
                movieTest.Poster !== "N/A"
                  ? movieTest.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movieTest.Title}
            />
          </div>

          <div>
            <span>{movieTest.Type}</span>
            <h3>{movieTest.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
