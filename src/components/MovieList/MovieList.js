import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const { data } = useContext(AppContext);
  return (
    <section className="App-section">
      <div className="movie-list">
        {data === "Movie is not found!" ? (
          <h2>Movie is not found!</h2>
        ) : (
          data.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movieImdbID={movie.imdbID}
              moviePoster={movie.Poster}
              movieTitle={movie.Title}
              movieType={movie.Type}
              movieYear={movie.Year}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MovieList;
