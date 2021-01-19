import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({
  release_date,
  title,
  overview,
  poster,
  vote_count,
  vote_average,
}) {
  return (
    <div className="movie">
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster.toString()}
        alt={title}
        title={title}
      />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_release">개봉일 : {release_date}</h5>
        <h5 className="movie_voteCount">투표 수 : {vote_count}</h5>
        <span style={{ color: "#b2b3bc" }}>관객 평점 </span>
        <div className="star-ratings-css">
          <div className="star-top" style={{ width: vote_average * 14 }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className="star-bottom">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <p className="movie_overview">{overview.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  vote_count: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default Movie;