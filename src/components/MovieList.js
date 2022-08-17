import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let movieBox = [];
    const myMovies = [
      "tt0068646",
      "tt1345836",
      "tt0110912",
      "tt0137523",
      "tt1375666",
      "tt0099685",
      "tt0816692",
      "tt0114369",
      "tt0407887",
      "tt0078788",
      "tt0482571",
      "tt1853728",
    ];

    myMovies.forEach((movie) => {
      (async () => {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${movie}&apikey=187ccaf5`
        );
        movieBox = [...movieBox, response.data];
        setMovies(movieBox);
      })();
    });
  }, []);

  return (
    <section className="App-section">
      <div className="movie-list">
        {movies.map((mov) => (
          <div className="movie-box" key={mov.imdbID}>
            <img src={mov.Poster} alt="movie_img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;
