import "./MovieCard.css";

const MovieCard = ({ moviePoster, movieTitle, movieYear, movieType, movieImdbID }) => {
  return (
    <div className="movie-card">
      <div className="movie-img">
        {moviePoster === "N/A" ? (
          <img src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg" alt="N/A" />
        ) : (
          <img src={moviePoster} alt="movie_img" />
        )}
      </div>

      <div className="movie-info-box">
        <span className="movie-title">{movieTitle}</span>

        <span className="movie-year">{movieYear}</span>

        <span className="movie-type">{movieType}</span>

        <a className="movie-link" href={`https://www.imdb.com/title/${movieImdbID}/`} target="_blank" rel="noopener noreferrer">
          imdb link
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
