import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import "../styles/MovieList.css";

const MovieList = () => {
  const { data } = useContext(MovieContext);
  return (
    <section className="App-section">
      <div className="movie-list">
        {data === "Movie is not found!" ? (
          <h2>Movie is not found!</h2>
        ) : (
          data.map((movie) => (
            <div className="movie-box" key={movie.imdbID}>
              <div className="movie-img">
                {movie.Poster === "N/A" ? (
                  <img
                    src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                    alt="N/A"
                  />
                ) : (
                  <img src={movie.Poster} alt="movie_img" />
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MovieList;
