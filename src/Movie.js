import React from "react";
import PropTypes from "prop-types";
import "./reset.css";
import "./Movie.css";

// State가 필요하지 않으면 class component를 사용할 필요가 없다.
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h5 className="movie__year">{year}</h5>
        <h3 className="movie__title">{title}</h3>
        <p className="movie__summary">{summary.substring(0, 300)}...</p>
        {/* <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
